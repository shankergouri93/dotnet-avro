(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7KrQ":function(n,e,t){"use strict";function r(){var n=y(["\n  <?xml\n    ","\n    [sS]+?\n  ?>\n"],["\n  <\\?xml\n    ","\n    [\\s\\S]+?\n  \\?>\n"]);return r=function(){return n},n}function a(){var n=y(["\n  <?\n    // Group 1: PITarget\n    (\n      ","\n    )\n\n    (?:\n      ","\n      (?:",")*?\n    )?\n  ?>\n"],["\n  <\\?\n    // Group 1: PITarget\n    (\n      ","\n    )\n\n    (?:\n      ","\n      (?:",")*?\n    )?\n  \\?>\n"]);return a=function(){return n},n}function u(){var n=y(["\n  <!DOCTYPE\n    ","\n\n    [^[>]*\n\n    (?:\n      [ [sS]+? ]\n      (?:",")?\n    )?\n  >\n"],["\n  <!DOCTYPE\n    ","\n\n    [^[>]*\n\n    (?:\n      \\[ [\\s\\S]+? \\]\n      (?:",")?\n    )?\n  >\n"]);return u=function(){return n},n}function o(){var n=y(["\n  \x3c!--\n    // Group 1: Comment text (optional)\n    (\n      (?:\n        (?!-) ","\n        | - (?!-) ","\n      )*\n    )\n  --\x3e\n"]);return o=function(){return n},n}function i(){var n=y(["\n  ^(?:",")*$\n"]);return i=function(){return n},n}function c(){var n=y(["\n  <\n    // Group 1: Start tag name\n    (",")\n\n    // Group 2: Attributes (optional)\n    (\n      (?:\n        ","\n        ","\n      )*\n    )\n\n    (?:",")?\n  >\n"]);return c=function(){return n},n}function l(){var n=y(["\n  </\n    // Group 1: End tag name\n    (",")\n    (?:",")?\n  >\n"]);return l=function(){return n},n}function s(){var n=y(["\n  <\n    // Group 1: Element name\n    (",")\n\n    // Group 2: Attributes (optional)\n    (\n      (?:\n        ","\n        ","\n      )*\n    )\n\n    (?:",")?\n  />\n"]);return s=function(){return n},n}function f(){var n=y(["\n  <![CDATA[\n    // Group 1: CData text content (optional)\n    (\n      (?:",")*?\n    )\n  ]]>\n"],["\n  <!\\[CDATA\\[\n    // Group 1: CData text content (optional)\n    (\n      (?:",")*?\n    )\n  \\]\\]>\n"]);return f=function(){return n},n}function p(){var n=y(["\n  ","\n  ",'\n\n  (?:\n    "(?:\n      [^<&"] | ',"\n    )*\"\n\n    |\n\n    '(?:\n      [^<&'] | ","\n    )*'\n  )\n"]);return p=function(){return n},n}function m(){var n=y(["\n  (?:",")?\n  =\n  (?:",")?\n"]);return m=function(){return n},n}function v(){var n=y(["\n  [ \t\r\n]+\n"],["\n  [\\x20\\t\\r\\n]+\n"]);return v=function(){return n},n}function d(){var n=y(["\n  &S+?;\n"],["\n  &\\S+?;\n"]);return d=function(){return n},n}function h(){var n=y(["\n  ","\n  (?:",")*\n"]);return h=function(){return n},n}function g(){var n=y(["\n  (?:\n    ","\n\n    |\n\n    [\n      .\n      0-9\n      ·\n      ̀-ͯ\n      ‿-⁀\n      -\n    ]\n  )\n"],["\n  (?:\n    ","\n\n    |\n\n    [\n      .\n      0-9\n      \\xB7\n      \\u0300-\\u036F\n      \\u203F-\\u2040\n      -\n    ]\n  )\n"]);return g=function(){return n},n}function E(){var n=y(["\n  (?:\n    [\n      :\n      A-Z\n      _\n      a-z\n      À-Ö\n      Ø-ö\n      ø-˿\n      Ͱ-ͽ\n      Ϳ-῿\n      ‌-‍\n      ⁰-↏\n      Ⰰ-⿯\n      、-퟿\n      豈-﷏\n      ﷰ-�\n    ]\n\n    |\n\n    [\ud800-\udb7f][\udc00-\udfff]\n  )\n"],["\n  (?:\n    [\n      :\n      A-Z\n      _\n      a-z\n      \\xC0-\\xD6\n      \\xD8-\\xF6\n      \\xF8-\\u02FF\n      \\u0370-\\u037D\n      \\u037F-\\u1FFF\n      \\u200C-\\u200D\n      \\u2070-\\u218F\n      \\u2C00-\\u2FEF\n      \\u3001-\\uD7FF\n      \\uF900-\\uFDCF\n      \\uFDF0-\\uFFFD\n    ]\n\n    |\n\n    [\\uD800-\\uDB7F][\\uDC00-\\uDFFF]\n  )\n"]);return E=function(){return n},n}function F(){var n=y(["\n  [^<&]+\n"]);return F=function(){return n},n}function x(){var n=y(["\n  (?:\n    [\n      \t\n      \n\n      \r\n       -퟿\n      -�\n    ]\n\n    |\n\n    [\ud800-\udbff][\udc00-\udfff]\n  )\n"],["\n  (?:\n    [\n      \\t\n      \\n\n      \\r\n      \\x20-\\uD7FF\n      \\uE000-\\uFFFD\n    ]\n\n    |\n\n    [\\uD800-\\uDBFF][\\uDC00-\\uDFFF]\n  )\n"]);return x=function(){return n},n}function y(n,e){return e||(e=n.slice(0)),n.raw=e,n}function C(n){for(var e=n.length,t=n.raw,r=e-1,a="",u=arguments.length,o=new Array(u>1?u-1:0),i=1;i<u;i++)o[i-1]=arguments[i];for(var c=0;c<e;++c)a+=t[c].replace(/(^|[^\\])\/\/.*$/gm,"$1").replace(/\s+/g,""),c<r&&(a+=o[c].source);return new RegExp(a)}t("pIFo"),t("Oyvg"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("8+KV"),e.Char=C(x()),e.CharData=C(F()),e.NameStartChar=C(E()),e.NameChar=C(g(),e.NameStartChar),e.Name=C(h(),e.NameStartChar,e.NameChar),e.Reference=C(d()),e.S=C(v()),e.Eq=C(m(),e.S,e.S),e.Attribute=C(p(),e.Name,e.Eq,e.Reference,e.Reference),e.CDSect=C(f(),e.Char),e.EmptyElemTag=C(s(),e.Name,e.S,e.Attribute,e.S),e.ETag=C(l(),e.Name,e.S),e.STag=C(c(),e.Name,e.S,e.Attribute,e.S),e.CharOnly=C(i(),e.Char),e.Comment=C(o(),e.Char,e.Char),e.doctypedecl=C(u(),e.S,e.S),e.PI=C(a(),e.Name,e.S,e.Char),e.XMLDecl=C(r(),e.S),e.Anchored={},e.Global={},Object.keys(e).forEach((function(n){if("Anchored"!==n&&"CharOnly"!==n&&"Global"!==n){var t=e[n];e.Anchored[n]=new RegExp("^"+t.source),e.Global[n]=new RegExp(t.source,"g")}}))},"7ynA":function(n,e,t){"use strict";var r=t("q1tI"),a=t.n(r),u=(t("91GP"),t("f3/d"),t("xBj5")),o=function(n){var e=n.map,t=void 0===e?{}:e,a=n.xml;return function n(e){return void 0===e&&(e=[]),e.map((function(e,a){switch(e.type){case"element":var u=n(e.children),o=t[e.name],i=o?e.attributes:{};return Object(r.createElement)(o||r.Fragment,Object.assign({},i,{key:a}),u);case"text":return e.text;default:return!1}})).filter((function(n){return!!n}))}(Object(u.parse)("<root>"+a+"</root>").children)},i=t("KwlC");e.a=function(n){var e=n.xml;return a.a.createElement(o,{xml:e,map:{see:function(n){var e=n.cref;return a.a.createElement(i.a,{id:e})}}})}},AphP:function(n,e,t){"use strict";var r=t("XKFU"),a=t("S/j/"),u=t("apmT");r(r.P+r.F*t("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(n){var e=a(this),t=u(e);return"number"!=typeof t||isFinite(t)?e.toISOString():null}})},DW2E:function(n,e,t){var r=t("0/R4"),a=t("Z6vF").onFreeze;t("Xtr8")("freeze",(function(n){return function(e){return n&&r(e)?n(a(e)):e}}))},FLlr:function(n,e,t){var r=t("XKFU");r(r.P,"String",{repeat:t("l0Rn")})},VpUO:function(n,e,t){var r=t("XKFU"),a=t("d/Gc"),u=String.fromCharCode,o=String.fromCodePoint;r(r.S+r.F*(!!o&&1!=o.length),"String",{fromCodePoint:function(n){for(var e,t=[],r=arguments.length,o=0;r>o;){if(e=+arguments[o++],a(e,1114111)!==e)throw RangeError(e+" is not a valid code point");t.push(e<65536?u(e):u(55296+((e-=65536)>>10),e%1024+56320))}return t.join("")}})},l0Rn:function(n,e,t){"use strict";var r=t("RYi7"),a=t("vhPU");n.exports=function(n){var e=String(a(this)),t="",u=r(n);if(u<0||u==1/0)throw RangeError("Count can't be negative");for(;u>0;(u>>>=1)&&(e+=e))1&u&&(t+=e);return t}},mS65:function(n,e,t){"use strict";t("VpUO"),t("SRfc"),t("Vd3H"),t("91GP"),t("FLlr"),t("Tze0"),t("Oyvg"),t("OG14"),t("V+eJ"),t("AphP"),t("2Spj"),t("pIFo"),t("hHhE"),t("DW2E");var r,a=Object.freeze([]),u=Object.freeze(Object.create(null)),o=Object.freeze({"&amp;":"&","&apos;":"'","&gt;":">","&lt;":"<","&quot;":'"'}),i="cdata",c="comment",l="element",s="text";function f(n,e){e.parent=n.parent,e.toJSON=x,n.parent.children.push(e)}function p(n,e){var t=n.parent.children,r=t[t.length-1];void 0!==r&&r.type===s?r.text+=e:f(n,{type:s,text:e})}function m(n){var e=S(n,r.Anchored.CDSect),t=e[0],a=e[1];return void 0!==t&&(n.options.preserveCdata?f(n,{type:i,text:a}):p(n,a),!0)}function v(n){var e=S(n,r.Anchored.CharData)[0];if(void 0===e)return!1;var t=e.indexOf("]]>");return-1!==t&&(n.pos=n.prevPos+t,F(n,"Element content may not contain the CDATA section close delimiter `]]>`")),r.CharOnly.test(e)||(n.pos=n.prevPos+e.search(new RegExp("(?!"+r.Char.source+")")),F(n,"Element content contains an invalid character")),p(n,e),!0}function d(n){var e=S(n,r.Anchored.Comment)[1];return void 0!==e&&(n.options.preserveComments&&f(n,{type:c,content:e.trim()}),!0)}function h(n){return d(n)||g(n)||function(n){return S(n,r.Anchored.S).length>0}(n)}function g(n){var e=S(n,r.Anchored.PI),t=e[0],a=e[1];return void 0!==t&&("xml"===a.toLowerCase()&&(n.pos=n.prevPos,F(n,"XML declaration is only allowed at the start of the document")),!0)}function E(n){var e=S(n,r.Anchored.Reference)[0];return void 0!==e&&(p(n,n.replaceReference(e)),!0)}function F(n,e){for(var t=n.pos,r=n.xml,a=1,u="",o=1,i=0;i<t;++i){var c=r[i];"\n"===c?(a=1,u="",o+=1):(a+=1,u+=c)}var l=r.indexOf("\n",t),s=0;(u+=-1===l?r.slice(t):r.slice(t,l)).length>50&&(a<40?u=u.slice(0,50):(s=a-20,u=u.slice(s,a+30)));var f=new Error(e+" (line "+o+", column "+a+")\n  "+u+"\n"+" ".repeat(a-s+1)+"^\n");throw f.column=a,f.excerpt=u,f.line=o,f.pos=t,f}function x(){var n=Object.assign(Object.create(null),this);return delete n.parent,n}function y(n,e){return e.replace(r.Global.Reference,n.replaceReference).replace(r.Global.S," ").trim()}function C(n){if("#"===n[1]){var e;e="x"===n[2]?parseInt(n.slice(3,-1),16):parseInt(n.slice(2,-1),10),isNaN(e)&&(this.pos=this.prevPos,F(this,"Invalid character entity `"+n+"`"));var t=String.fromCodePoint(e);return r.Char.test(t)||(this.pos=this.prevPos,F(this,"Invalid character entity `"+n+"`")),t}var a=o[n];if(void 0!==a)return a;if(this.options.resolveUndefinedEntity){var u=this.options.resolveUndefinedEntity(n);if(null!=u)return u}if(this.options.ignoreUndefinedEntities)return n;this.pos=this.prevPos,F(this,"Named entity isn't defined: `"+n+"`")}function S(n,e){var t=n.pos,r=n.slice,u=n.xml;null===r&&(t>0?(r=u.slice(t),n.slice=r):r=u);var o=r.match(e);return null===o?a:(n.prevPos=n.pos,n.pos+=o[0].length,n.slice=null,o)}n.exports=function(n,e){void 0===e&&(e=u),void 0===r&&(r=t("7KrQ")),"\ufeff"===n[0]&&(n=n.slice(1));var a={type:"document",children:[],parent:null,toJSON:x},o={length:(n=n.replace(/\r\n?/g,"\n")).length,options:e,parent:a,pos:0,prevPos:0,slice:null,xml:n};for(o.replaceReference=C.bind(o),function(n){var e=n.pos;S(n,r.Anchored.XMLDecl);for(;h(n););if(function(n){return S(n,r.Anchored.doctypedecl).length>0}(n))for(;h(n););n.pos}(o),function n(e){var t=S(e,r.Anchored.EmptyElemTag),a=t[0],u=t[1],o=t[2];var i=void 0!==a;if(!i){var c=S(e,r.Anchored.STag);if(a=c[0],u=c[1],o=c[2],void 0===a)return!1}var s=e.parent;var p=function(n,e){var t=Object.create(null);if(!e)return t;for(var a=e.match(r.Global.Attribute).sort(),u=0,o=a.length;u<o;++u){var i=a[u],c=i.match(r.Eq),l=i.slice(0,c.index),s=i.slice(c.index+c[0].length);l in t&&(n.pos=n.prevPos,F(n,"Attribute `"+l+"` redefined")),s=y(n,s.slice(1,-1)),"xml:space"===l&&"default"!==s&&"preserve"!==s&&(n.pos=n.prevPos,F(n,'Value of the `xml:space` attribute must be "default" or "preserve"')),t[l]=s}return t}(e,o);var h={type:l,name:u,attributes:p,children:[]};var x=p["xml:space"];("preserve"===x||"default"!==x&&s.preserveWhitespace)&&(h.preserveWhitespace=!0);if(!i){for(e.parent=h,v(e);n(e)||E(e)||m(e)||g(e)||d(e);)v(e);S(e,r.Anchored.ETag)[1]!==u&&(e.pos=e.prevPos,F(e,"Missing end tag for element "+u)),e.parent=s}f(e,h);return!0}(o)||F(o,"Root element is missing or invalid");h(o););return function(n){return n.pos>=n.length-1}(o)||F(o,"Extra content at the end of the document"),a}},nvI8:function(n,e,t){"use strict";t.r(e);t("f3/d");var r=t("Wbzz"),a=t("q1tI"),u=t.n(a),o=t("TJpk"),i=t("7ynA"),c=t("KwlC"),l=function(n){var e=n.types;return e.length>0&&e.map((function(n){return u.a.createElement(a.Fragment,{key:n.id},u.a.createElement("h5",null,u.a.createElement(c.a,{id:n.id})),u.a.createElement(i.a,{xml:n.summary}))}))},s=function(n){var e=n.namespace,t=e.summary,r=e.types.filter((function(n){return"class"===n.kind})),a=e.types.filter((function(n){return"interface"===n.kind}));return u.a.createElement(u.a.Fragment,null,t&&u.a.createElement(i.a,{xml:t}),r.length>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Classes"),u.a.createElement(l,{types:r})),a.length>0&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Interfaces"),u.a.createElement(l,{types:a})))},f=t("qMuy"),p=t("C8On"),m=t.n(p);t.d(e,"query",(function(){return v}));e.default=function(n){var e=n.data.dotnetNamespace;return u.a.createElement(u.a.Fragment,null,u.a.createElement(o.Helmet,null,u.a.createElement("title",null,e.name+" namespace")),u.a.createElement(f.a,null,u.a.createElement(r.a,{to:"/api"},"API reference")),u.a.createElement("h1",{className:m.a.title},u.a.createElement("code",null,e.name)," namespace"),u.a.createElement(s,{namespace:e}))};var v="105980082"},qMuy:function(n,e,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var r=t("q1tI"),a=t.n(r),u=t("L9tB"),o=t.n(u);e.a=function(n){var e=n.children,t=function(n,e){if(null==n)return{};var t,r,a={},u=Object.keys(n);for(r=0;r<u.length;r++)t=u[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["children"]);if(e)return Array.isArray(e)||(e=[e]),a.a.createElement("ul",Object.assign({className:o.a.breadcrumb},t),e.map((function(n,e){return a.a.createElement("li",{key:e},n)})))}},xBj5:function(n,e,t){t("pIFo"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("f3/d");var r=t("mS65");n.exports={getMarkup:function n(e,t){switch(void 0===t&&(t=!1),e.type){case"document":return e.children.map(n).join("");case"element":var r=e.children.map((function(e){return n(e,!0)})).join("");if(!t)return r.trim();var a=e.name;return"<"+a+Object.keys(e.attributes).map((function(n){return" "+n+'="'+e.attributes[n].replace(/"/,"&#34;")+'"'})).join("")+(r.length>0?">"+r+"</"+a+">":" />");case"text":return e.text;default:return""}},getText:function n(e){switch(e.type){case"document":case"element":return e.children.map(n).join("");case"text":return e.text.replace(/\s+/," ").trim();default:return""}},parse:r}}}]);
//# sourceMappingURL=component---src-templates-dotnet-namespace-js-3614da1338bef94c4485.js.map