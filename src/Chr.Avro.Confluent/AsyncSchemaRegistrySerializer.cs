using Chr.Avro.Representation;
using Chr.Avro.Serialization;
using Confluent.Kafka;
using Confluent.SchemaRegistry;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Chr.Avro.Confluent
{
    /// <summary>
    /// An <see cref="IAsyncSerializer{T}" /> that resolves Avro schemas on the fly. When serializing
    /// messages, this serializer will attempt to look up a subject that matches the topic name (if
    /// not already cached).
    /// </summary>
    /// <remarks>
    /// By default, when serializing keys for a topic with name "test_topic", this deserializer
    /// would query the Schema Registry for subject "test_topic-key". (This is a Confluent
    /// convention—values would be "test_topic-value".)
    /// </remarks>
    public class AsyncSchemaRegistrySerializer<T> : IAsyncSerializer<T>
    {
        /// <summary>
        /// Whether to automatically register schemas that match the type being serialized.
        /// </summary>
        public AutomaticRegistrationBehavior RegisterAutomatically { get; }

        /// <summary>
        /// The schema builder used to create a schema for a C# type when registering automatically.
        /// </summary>
        public Abstract.ISchemaBuilder SchemaBuilder { get; }

        /// <summary>
        /// The JSON schema reader used to convert schemas received from the registry into abstract
        /// representations.
        /// </summary>
        public IJsonSchemaReader SchemaReader { get; }

        /// <summary>
        /// The JSON schema writer used to convert abstract schema representations when registering
        /// automatically.
        /// </summary>
        public IJsonSchemaWriter SchemaWriter { get; }

        /// <summary>
        /// The deserializer builder to use to build serialization functions for C# types.
        /// </summary>
        public IBinarySerializerBuilder SerializerBuilder { get; }

        /// <summary>
        /// A function that determines the subject name given the topic name and a component type
        /// (key or value).
        /// </summary>
        public Func<SerializationContext, string> SubjectNameBuilder { get; }

        /// <summary>
        /// The behavior of the serializer on tombstone records.
        /// </summary>
        public TombstoneBehavior TombstoneBehavior { get; }

        private readonly IDictionary<string, Task<Func<T, byte[]>>> _cache;

        private readonly Func<string, string, Task<int>> _register;

        private readonly Func<string, Task<Schema>> _resolve;

        /// <summary>
        /// Creates a serializer.
        /// </summary>
        /// <param name="registryConfiguration">
        /// Schema Registry configuration. Using the <see cref="SchemaRegistryConfig" /> class is
        /// highly recommended.
        /// </param>
        /// <param name="registerAutomatically">
        /// When to automatically register schemas that match the type being serialized.
        /// </param>
        /// <param name="schemaBuilder">
        /// The schema builder to use to create a schema for a C# type when registering automatically.
        /// If none is provided, the default schema builder will be used.
        /// </param>
        /// <param name="schemaReader">
        /// The JSON schema reader to use to convert schemas received from the registry into abstract
        /// representations. If none is provided, the default schema reader will be used.
        /// </param>
        /// <param name="schemaWriter">
        /// The JSON schema writer to use to convert abstract schema representations when registering
        /// automatically. If none is provided, the default schema writer will be used.
        /// </param>
        /// <param name="serializerBuilder">
        /// The deserializer builder to use to build serialization functions for C# types. If none
        /// is provided, the default serializer builder will be used.
        /// </param>
        /// <param name="subjectNameBuilder">
        /// A function that determines the subject name given the topic name and a component type
        /// (key or value). If none is provided, the default "{topic name}-{component}" naming
        /// convention will be used.
        /// </param>
        /// <param name="tombstoneBehavior">
        /// The behavior of the serializer on tombstone records.
        /// </param>
        /// <exception cref="ArgumentNullException">
        /// Thrown when the registry configuration is null.
        /// </exception>
        public AsyncSchemaRegistrySerializer(
            IEnumerable<KeyValuePair<string, string>> registryConfiguration,
            AutomaticRegistrationBehavior registerAutomatically = AutomaticRegistrationBehavior.Never,
            Abstract.ISchemaBuilder schemaBuilder = null,
            IJsonSchemaReader schemaReader = null,
            IJsonSchemaWriter schemaWriter = null,
            IBinarySerializerBuilder serializerBuilder = null,
            Func<SerializationContext, string> subjectNameBuilder = null,
            TombstoneBehavior tombstoneBehavior = TombstoneBehavior.None
        ) {
            if (registryConfiguration == null)
            {
                throw new ArgumentNullException(nameof(registryConfiguration));
            }

            if (tombstoneBehavior != TombstoneBehavior.None && default(T) != null)
            {
                throw new UnsupportedTypeException(typeof(T), $"{typeof(T)} cannot represent tombstone values.");
            }

            RegisterAutomatically = registerAutomatically;
            SchemaBuilder = schemaBuilder ?? new Abstract.SchemaBuilder();
            SchemaReader = schemaReader ?? new JsonSchemaReader();
            SchemaWriter = schemaWriter ?? new JsonSchemaWriter();
            SerializerBuilder = serializerBuilder ?? new BinarySerializerBuilder();
            SubjectNameBuilder = subjectNameBuilder ??
                (c => $"{c.Topic}-{(c.Component == MessageComponentType.Key ? "key" : "value")}");
            TombstoneBehavior = tombstoneBehavior;

            _cache = new Dictionary<string, Task<Func<T, byte[]>>>();

            _register = async (subject, json) =>
            {
                using (var registry = new CachedSchemaRegistryClient(registryConfiguration))
                {
                    return await registry.RegisterSchemaAsync(subject, json).ConfigureAwait(false);
                }
            };

            _resolve = async subject =>
            {
                using (var registry = new CachedSchemaRegistryClient(registryConfiguration))
                {
                    return await registry.GetLatestSchemaAsync(subject).ConfigureAwait(false);
                }
            };
        }

        /// <summary>
        /// Creates a serializer.
        /// </summary>
        /// <param name="registryClient">
        /// The client to use for Schema Registry operations. (The client will not be disposed.)
        /// </param>
        /// <param name="registerAutomatically">
        /// When to automatically register schemas that match the type being serialized.
        /// </param>
        /// <param name="schemaBuilder">
        /// The schema builder to use to create a schema for a C# type when registering automatically.
        /// If none is provided, the default schema builder will be used.
        /// </param>
        /// <param name="schemaReader">
        /// The JSON schema reader to use to convert schemas received from the registry into abstract
        /// representations. If none is provided, the default schema reader will be used.
        /// </param>
        /// <param name="schemaWriter">
        /// The JSON schema writer to use to convert abstract schema representations when registering
        /// automatically. If none is provided, the default schema writer will be used.
        /// </param>
        /// <param name="serializerBuilder">
        /// The deserializer builder to use to build serialization functions for C# types. If none
        /// is provided, the default serializer builder will be used.
        /// </param>
        /// <param name="subjectNameBuilder">
        /// A function that determines the subject name given the topic name and a component type
        /// (key or value). If none is provided, the default "{topic name}-{component}" naming
        /// convention will be used.
        /// </param>
        /// <param name="tombstoneBehavior">
        /// The behavior of the serializer on tombstone records.
        /// </param>
        /// <exception cref="ArgumentNullException">
        /// Thrown when the registry client is null.
        /// </exception>
        public AsyncSchemaRegistrySerializer(
            ISchemaRegistryClient registryClient,
            AutomaticRegistrationBehavior registerAutomatically = AutomaticRegistrationBehavior.Never,
            Abstract.ISchemaBuilder schemaBuilder = null,
            IJsonSchemaReader schemaReader = null,
            IJsonSchemaWriter schemaWriter = null,
            IBinarySerializerBuilder serializerBuilder = null,
            Func<SerializationContext, string> subjectNameBuilder = null,
            TombstoneBehavior tombstoneBehavior = TombstoneBehavior.None
        ) {
            if (registryClient == null)
            {
                throw new ArgumentNullException(nameof(registryClient));
            }

            if (tombstoneBehavior != TombstoneBehavior.None && default(T) != null)
            {
                throw new UnsupportedTypeException(typeof(T), $"{typeof(T)} cannot represent tombstone values.");
            }

            RegisterAutomatically = registerAutomatically;
            SchemaBuilder = schemaBuilder ?? new Abstract.SchemaBuilder();
            SchemaReader = schemaReader ?? new JsonSchemaReader();
            SchemaWriter = schemaWriter ?? new JsonSchemaWriter();
            SerializerBuilder = serializerBuilder ?? new BinarySerializerBuilder();
            SubjectNameBuilder = subjectNameBuilder ??
                (c => $"{c.Topic}-{(c.Component == MessageComponentType.Key ? "key" : "value")}");
            TombstoneBehavior = tombstoneBehavior;

            _cache = new Dictionary<string, Task<Func<T, byte[]>>>();
            _register = (subject, json) => registryClient.RegisterSchemaAsync(subject, json);
            _resolve = subject => registryClient.GetLatestSchemaAsync(subject);
        }

        /// <summary>
        /// Serialize a message. (See <see cref="IAsyncSerializer{T}.SerializeAsync(T, SerializationContext)" />.)
        /// </summary>
        public virtual async Task<byte[]> SerializeAsync(T data, SerializationContext context)
        {
            var subject = SubjectNameBuilder(context);

            Task<Func<T, byte[]>> task;

            lock (_cache)
            {
                if (!_cache.TryGetValue(subject, out task) || task.IsFaulted)
                {
                    _cache[subject] = task = ((Func<string, Task<Func<T, byte[]>>>)(async subject =>
                    {
                        switch (RegisterAutomatically)
                        {
                            case AutomaticRegistrationBehavior.Always:
                                var schema = SchemaBuilder.BuildSchema<T>();
                                var id = await _register(subject, SchemaWriter.Write(schema)).ConfigureAwait(false);

                                return Build(id, schema);

                            case AutomaticRegistrationBehavior.Never:
                                var existing = await _resolve(subject).ConfigureAwait(false);

                                return Build(existing.Id, SchemaReader.Read(existing.SchemaString));

                            default:
                                throw new ArgumentOutOfRangeException(nameof(RegisterAutomatically));
                        }
                    }))(subject);
                }
            }

            var serialize = await task.ConfigureAwait(false);

            if (data == null && TombstoneBehavior != TombstoneBehavior.None)
            {
                if (context.Component == MessageComponentType.Value || TombstoneBehavior != TombstoneBehavior.Strict)
                {
                    return null;
                }
            }

            return serialize(data);
        }

        /// <summary>
        /// Builds a serializer for the Confluent wire format.
        /// </summary>
        /// <param name="id">
        /// A schema ID to include in each serialized payload.
        /// </param>
        /// <param name="schema">
        /// The schema to build the Avro serializer from.
        /// </param>
        protected virtual Func<T, byte[]> Build(int id, Abstract.Schema schema)
        {
            var bytes = BitConverter.GetBytes(id);

            if (BitConverter.IsLittleEndian)
            {
                Array.Reverse(bytes);
            }

            var serialize = SerializerBuilder.BuildDelegate<T>(schema);

            return value =>
            {
                var stream = new MemoryStream();

                using (stream)
                {
                    stream.WriteByte(0x00);
                    stream.Write(bytes, 0, bytes.Length);

                    serialize(value, stream);
                }

                return stream.ToArray();
            };
        }
    }
}
