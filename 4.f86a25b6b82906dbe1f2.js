(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"03A+":function(t,e,r){var n=r("JTzB"),o=r("ExA7"),u=Object.prototype,i=u.hasOwnProperty,f=u.propertyIsEnumerable,a=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!f.call(t,"callee")};t.exports=a},"1shM":function(t,e,r){t.exports=r("vR07")},"2sf1":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){if(null!==t){var e=t;t=null,e.apply(this,arguments)}}},t.exports=e.default},"3qT5":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){e|=0;for(var r=Math.max(t.length-e,0),n=Array(r),o=0;o<r;o++)n[o]=t[e+o];return n},t.exports=e.default},"56vw":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,o.default)(function(e,r){var o;try{o=t.apply(this,e)}catch(u){return r(u)}(0,n.default)(o)&&"function"==typeof o.then?o.then(function(t){f(r,null,t)},function(t){f(r,t.message?t:new Error(t))}):r(null,o)})};var n=i(r("GoyQ")),o=i(r("hGab")),u=i(r("LgDX"));function i(t){return t&&t.__esModule?t:{default:t}}function f(t,e,r){try{t(e,r)}catch(n){(0,u.default)(a,n)}}function a(t){throw t}t.exports=e.default},"6oS5":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){r=r||n.default;var f=(0,o.default)(e)?[]:{};t(e,function(t,e,r){(0,i.default)(t)(function(t,n){arguments.length>2&&(n=(0,u.default)(arguments,1)),f[e]=n,r(t)})},function(t){r(t,f)})};var n=f(r("vN+2")),o=f(r("MMmD")),u=f(r("3qT5")),i=f(r("aR5N"));function f(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},"6sVZ":function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},"7GkX":function(t,e,r){var n=r("b80T"),o=r("A90E"),u=r("MMmD");t.exports=function(t){return u(t)?n(t):o(t)}},"97sR":function(t,e,r){const n=r("uXik"),o=r("1shM");function u(t){const e=new Error("Expect argument to be non-empty array");if("object"!=typeof t||!t.length)throw e;const r=t.map(function(t){return"bytes"===t.type?n.toBuffer(t.value):t.value}),u=t.map(function(t){return t.type}),i=t.map(function(t){if(!t.name)throw e;return t.type+" "+t.name});return o.soliditySHA3(["bytes32","bytes32"],[o.soliditySHA3(new Array(t.length).fill("string"),i),o.soliditySHA3(u,r)])}function i(t,e){const r=n.toBuffer(e),o=n.fromRpcSig(r);return n.ecrecover(t,o.v,o.r,o.s)}function f(t){const e=n.toBuffer(t.data);return i(n.hashPersonalMessage(e),t.sig)}function a(t,e){for(var r=""+t;r.length<e;)r="0"+r;return r}t.exports={concatSig:function(t,e,r){const o=n.fromSigned(e),u=n.fromSigned(r),i=n.bufferToInt(t),f=a(n.toUnsigned(o).toString("hex"),64),c=a(n.toUnsigned(u).toString("hex"),64),s=n.stripHexPrefix(n.intToHex(i));return n.addHexPrefix(f.concat(c,s)).toString("hex")},normalize:function(t){if(t){if("number"==typeof t){const e=n.toBuffer(t);t=n.bufferToHex(e)}if("string"!=typeof t){var e="eth-sig-util.normalize() requires hex string or integer input.";throw new Error(e+=" received "+typeof t+": "+t)}return n.addHexPrefix(t.toLowerCase())}},personalSign:function(t,e){var r=n.toBuffer(e.data),o=n.hashPersonalMessage(r),u=n.ecsign(o,t);return n.bufferToHex(this.concatSig(u.v,u.r,u.s))},recoverPersonalSignature:function(t){const e=f(t),r=n.publicToAddress(e);return n.bufferToHex(r)},extractPublicKey:function(t){return"0x"+f(t).toString("hex")},typedSignatureHash:function(t){const e=u(t);return n.bufferToHex(e)},signTypedData:function(t,e){const r=u(e.data),o=n.ecsign(r,t);return n.bufferToHex(this.concatSig(o.v,o.r,o.s))},recoverTypedSignature:function(t){const e=i(u(t.data),t.sig),r=n.publicToAddress(e);return n.bufferToHex(r)}}},A90E:function(t,e,r){var n=r("6sVZ"),o=r("V6Ve"),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))u.call(t,r)&&"constructor"!=r&&e.push(r);return e}},AP2z:function(t,e,r){var n=r("nmnc"),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,f=n?n.toStringTag:void 0;t.exports=function(t){var e=u.call(t,f),r=t[f];try{t[f]=void 0;var n=!0}catch(a){}var o=i.call(t);return n&&(e?t[f]=r:delete t[f]),o}},B8du:function(t,e){t.exports=function(){return!1}},BMM2:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if((0,n.default)(t))return function(t){var e=-1,r=t.length;return function(){return++e<r?{value:t[e],key:e}:null}}(t);var e,r,i,f,a=(0,o.default)(t);return a?function(t){var e=-1;return function(){var r=t.next();return r.done?null:(e++,{value:r.value,key:e})}}(a):(r=(0,u.default)(e=t),i=-1,f=r.length,function(){var t=r[++i];return i<f?{value:e[t],key:t}:null})};var n=i(r("MMmD")),o=i(r("oEkW")),u=i(r("7GkX"));function i(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},C065:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(r("fPec")),o=u(r("PpH3"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=(0,o.default)(n.default,1),t.exports=e.default},DSRE:function(t,e,r){(function(t){var n=r("Kz5y"),o=r("B8du"),u=e&&!e.nodeType&&e,i=u&&"object"==typeof t&&t&&!t.nodeType&&t,f=i&&i.exports===u?n.Buffer:void 0;t.exports=(f?f.isBuffer:void 0)||o}).call(this,r("0SIU")(t))},DZHT:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(r("hfq4")),o=u(r("R6+z"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)(o.default),t.exports=e.default},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},JTzB:function(t,e,r){var n=r("NykK"),o=r("ExA7");t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},KWkM:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){(0,o.default)(n.default,t,e)};var n=u(r("abV/")),o=u(r("6oS5"));function u(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},KfNM:function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},KwLt:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={},t.exports=e.default},Kz5y:function(t,e,r){var n=r("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,u=n||o||Function("return this")();t.exports=u},LgDX:function(t,e,r){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.hasNextTick=e.hasSetImmediate=void 0,e.fallback=a,e.wrap=c;var o,u=(o=r("3qT5"))&&o.__esModule?o:{default:o},i=e.hasSetImmediate="function"==typeof t&&t,f=e.hasNextTick="object"==typeof n&&"function"==typeof n.nextTick;function a(t){setTimeout(t,0)}function c(t){return function(e){var r=(0,u.default)(arguments,1);t(function(){e.apply(null,r)})}}e.default=c(i?t:f?n.nextTick:a)}).call(this,r("URgk").setImmediate,r("8oxB"))},MMmD:function(t,e,r){var n=r("lSCD"),o=r("shjB");t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},NDoG:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,r,a){if(a=(0,o.default)(a||n.default),t<=0||!e)return a(null);var c=(0,u.default)(e),s=!1,l=0,d=!1;function p(t,e){if(l-=1,t)s=!0,a(t);else{if(e===f.default||s&&l<=0)return s=!0,a(null);d||y()}}function y(){for(d=!0;l<t&&!s;){var e=c();if(null===e)return s=!0,void(l<=0&&a(null));l+=1,r(e.value,e.key,(0,i.default)(p))}d=!1}y()}};var n=a(r("vN+2")),o=a(r("2sf1")),u=a(r("BMM2")),i=a(r("rH6r")),f=a(r("KwLt"));function a(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},NykK:function(t,e,r){var n=r("nmnc"),o=r("AP2z"),u=r("KfNM"),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):u(t)}},PpH3:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return function(r,n,o){return t(r,e,n,o)}},t.exports=e.default},"R6+z":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r,u){u=u||n.default,e=e||[];var i=[],f=0,a=(0,o.default)(r);t(e,function(t,e,r){var n=f++;a(t,function(t,e){i[n]=e,r(t)})},function(t){u(t,i)})};var n=u(r("vN+2")),o=u(r("aR5N"));function u(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},RGXH:function(t,e){var r,n,o,u,i={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},f=function(t){throw{name:"SyntaxError",message:t,at:r,text:o}},a=function(t){return t&&t!==n&&f("Expected '"+t+"' instead of '"+n+"'"),n=o.charAt(r),r+=1,n},c=function(){var t,e="";for("-"===n&&(e="-",a("-"));n>="0"&&n<="9";)e+=n,a();if("."===n)for(e+=".";a()&&n>="0"&&n<="9";)e+=n;if("e"===n||"E"===n)for(e+=n,a(),"-"!==n&&"+"!==n||(e+=n,a());n>="0"&&n<="9";)e+=n,a();if(t=+e,isFinite(t))return t;f("Bad number")},s=function(){var t,e,r,o="";if('"'===n)for(;a();){if('"'===n)return a(),o;if("\\"===n)if(a(),"u"===n){for(r=0,e=0;e<4&&(t=parseInt(a(),16),isFinite(t));e+=1)r=16*r+t;o+=String.fromCharCode(r)}else{if("string"!=typeof i[n])break;o+=i[n]}else o+=n}f("Bad string")},l=function(){for(;n&&n<=" ";)a()};u=function(){switch(l(),n){case"{":return function(){var t,e={};if("{"===n){if(a("{"),l(),"}"===n)return a("}"),e;for(;n;){if(t=s(),l(),a(":"),Object.hasOwnProperty.call(e,t)&&f('Duplicate key "'+t+'"'),e[t]=u(),l(),"}"===n)return a("}"),e;a(","),l()}}f("Bad object")}();case"[":return function(){var t=[];if("["===n){if(a("["),l(),"]"===n)return a("]"),t;for(;n;){if(t.push(u()),l(),"]"===n)return a("]"),t;a(","),l()}}f("Bad array")}();case'"':return s();case"-":return c();default:return n>="0"&&n<="9"?c():function(){switch(n){case"t":return a("t"),a("r"),a("u"),a("e"),!0;case"f":return a("f"),a("a"),a("l"),a("s"),a("e"),!1;case"n":return a("n"),a("u"),a("l"),a("l"),null}f("Unexpected '"+n+"'")}()}},t.exports=function(t,e){var i;return o=t,r=0,n=" ",i=u(),l(),n&&f("Syntax error"),"function"==typeof e?function t(r,n){var o,u,i=r[n];if(i&&"object"==typeof i)for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(void 0!==(u=t(i,o))?i[o]=u:delete i[o]);return e.call(r,n,i)}({"":i},""):i}},"UNi/":function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},V6Ve:function(t,e,r){var n=r("kekF")(Object.keys,Object);t.exports=n},WFqU:function(t,e,r){(function(e){t.exports="object"==typeof e&&e&&e.Object===Object&&e}).call(this,r("wg4m"))},Z0cm:function(t,e){t.exports=Array.isArray},aR5N:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isAsync=void 0;var n,o=(n=r("56vw"))&&n.__esModule?n:{default:n},u="function"==typeof Symbol;function i(t){return u&&"AsyncFunction"===t[Symbol.toStringTag]}e.default=function(t){return i(t)?(0,o.default)(t):t},e.isAsync=i},"abV/":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){((0,n.default)(t)?d:p)(t,(0,s.default)(e),r)};var n=l(r("MMmD")),o=l(r("KwLt")),u=l(r("k2x9")),i=l(r("PpH3")),f=l(r("vN+2")),a=l(r("2sf1")),c=l(r("rH6r")),s=l(r("aR5N"));function l(t){return t&&t.__esModule?t:{default:t}}function d(t,e,r){r=(0,a.default)(r||f.default);var n=0,u=0,i=t.length;function s(t,e){t?r(t):++u!==i&&e!==o.default||r(null)}for(0===i&&r(null);n<i;n++)e(t[n],n,(0,c.default)(s))}var p=(0,i.default)(u.default,1/0);t.exports=e.default},b80T:function(t,e,r){var n=r("UNi/"),o=r("03A+"),u=r("Z0cm"),i=r("DSRE"),f=r("wJg7"),a=r("c6wG"),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=u(t),s=!r&&o(t),l=!r&&!s&&i(t),d=!r&&!s&&!l&&a(t),p=r||s||l||d,y=p?n(t.length,String):[],h=y.length;for(var v in t)!e&&!c.call(t,v)||p&&("length"==v||l&&("offset"==v||"parent"==v)||d&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||f(v,h))||y.push(v);return y}},c6wG:function(t,e,r){var n=r("dD9F"),o=r("sEf8"),u=r("mdPL"),i=u&&u.isTypedArray,f=i?o(i):n;t.exports=f},dD9F:function(t,e,r){var n=r("NykK"),o=r("shjB"),u=r("ExA7"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return u(t)&&o(t.length)&&!!i[n(t)]}},dsut:function(t,e,r){e.parse=r("RGXH"),e.stringify=r("uPSP")},fPec:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r,i){(0,n.default)(e)(t,(0,o.default)((0,u.default)(r)),i)};var n=i(r("NDoG")),o=i(r("lNiw")),u=i(r("aR5N"));function i(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},hGab:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=(0,o.default)(arguments),r=e.pop();t.call(this,e,r)}};var n,o=(n=r("3qT5"))&&n.__esModule?n:{default:n};t.exports=e.default},hfq4:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,r,u){return t(n.default,e,(0,o.default)(r),u)}};var n=u(r("abV/")),o=u(r("aR5N"));function u(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},k2x9:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r,u){(0,n.default)(e)(t,(0,o.default)(r),u)};var n=u(r("NDoG")),o=u(r("aR5N"));function u(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},kekF:function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},l1gh:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(e=(0,u.default)(e||o.default),!(0,n.default)(t))return e(new Error("First argument to waterfall must be an array of functions"));if(!t.length)return e();var r=0;function c(e){var n=(0,a.default)(t[r++]);e.push((0,f.default)(s)),n.apply(null,e)}function s(n){if(n||r===t.length)return e.apply(null,arguments);c((0,i.default)(arguments,1))}c([])};var n=c(r("Z0cm")),o=c(r("vN+2")),u=c(r("2sf1")),i=c(r("3qT5")),f=c(r("rH6r")),a=c(r("aR5N"));function c(t){return t&&t.__esModule?t:{default:t}}t.exports=e.default},lNiw:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,r,n){return t(e,n)}},t.exports=e.default},lSCD:function(t,e,r){var n=r("NykK"),o=r("GoyQ");t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},mdPL:function(t,e,r){(function(t){var n=r("WFqU"),o=e&&!e.nodeType&&e,u=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=u&&u.exports===o&&n.process,f=function(){try{return u&&u.require&&u.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=f}).call(this,r("0SIU")(t))},nmnc:function(t,e,r){var n=r("Kz5y");t.exports=n.Symbol},oEkW:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return n&&t[n]&&t[n]()};var n="function"==typeof Symbol&&Symbol.iterator;t.exports=e.default},odnP:function(t,e,r){(function(e){!function(r){"use strict";var n=function(t){setTimeout(t,0)};void 0!==e&&e&&"function"==typeof e.nextTick&&(n=e.nextTick),t.exports=function(t){var e={capacity:t||1,current:0,queue:[],firstHere:!1,take:function(){if(!1===e.firstHere){e.current++,e.firstHere=!0;var t=1}else t=0;var r={n:1};"function"==typeof arguments[0]?r.task=arguments[0]:r.n=arguments[0],arguments.length>=2&&("function"==typeof arguments[1]?r.task=arguments[1]:r.n=arguments[1]);var n=r.task;if(r.task=function(){n(e.leave)},e.current+r.n-t>e.capacity)return 1===t&&(e.current--,e.firstHere=!1),e.queue.push(r);e.current+=r.n-t,r.task(e.leave),1===t&&(e.firstHere=!1)},leave:function(t){if(e.current-=t=t||1,e.queue.length){var r=e.queue[0];r.n+e.current>e.capacity||(e.queue.shift(),e.current+=r.n,n(r.task))}else if(e.current<0)throw new Error("leave called too many times.")},available:function(t){return e.current+(t=t||1)<=e.capacity}};return e}}()}).call(this,r("8oxB"))},"rE/H":function(t,e,r){var n="undefined"!=typeof JSON?JSON:r("dsut");t.exports=function(t,e){e||(e={}),"function"==typeof e&&(e={cmp:e});var r=e.space||"";"number"==typeof r&&(r=Array(r+1).join(" "));var i,f="boolean"==typeof e.cycles&&e.cycles,a=e.replacer||function(t,e){return e},c=e.cmp&&(i=e.cmp,function(t){return function(e,r){return i({key:e,value:t[e]},{key:r,value:t[r]})}}),s=[];return function t(e,i,l,d){var p=r?"\n"+new Array(d+1).join(r):"",y=r?": ":":";if(l&&l.toJSON&&"function"==typeof l.toJSON&&(l=l.toJSON()),void 0!==(l=a.call(e,i,l))){if("object"!=typeof l||null===l)return n.stringify(l);if(o(l)){for(var h=[],v=0;v<l.length;v++){var b=t(l,v,l[v],d+1)||n.stringify(null);h.push(p+r+b)}return"["+h.join(",")+p+"]"}if(-1!==s.indexOf(l)){if(f)return n.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}s.push(l);var g=u(l).sort(c&&c(l));for(h=[],v=0;v<g.length;v++){var w=t(l,i=g[v],l[i],d+1);if(w){var x=n.stringify(i)+y+w;h.push(p+r+x)}}return s.splice(s.indexOf(l),1),"{"+h.join(",")+p+"}"}}({"":t},"",t,0)};var o=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},u=Object.keys||function(t){var e=Object.prototype.hasOwnProperty||function(){return!0},r=[];for(var n in t)e.call(t,n)&&r.push(n);return r}},rH6r:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){if(null===t)throw new Error("Callback was already called.");var e=t;t=null,e.apply(this,arguments)}},t.exports=e.default},sEf8:function(t,e){t.exports=function(t){return function(e){return t(e)}}},shjB:function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},uPSP:function(t,e){var r,n,o,u=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function f(t){return u.lastIndex=0,u.test(t)?'"'+t.replace(u,function(t){var e=i[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function a(t,e){var u,i,c,s,l,d=r,p=e[t];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),"function"==typeof o&&(p=o.call(e,t,p)),typeof p){case"string":return f(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(r+=n,l=[],"[object Array]"===Object.prototype.toString.apply(p)){for(s=p.length,u=0;u<s;u+=1)l[u]=a(u,p)||"null";return c=0===l.length?"[]":r?"[\n"+r+l.join(",\n"+r)+"\n"+d+"]":"["+l.join(",")+"]",r=d,c}if(o&&"object"==typeof o)for(s=o.length,u=0;u<s;u+=1)"string"==typeof(i=o[u])&&(c=a(i,p))&&l.push(f(i)+(r?": ":":")+c);else for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(c=a(i,p))&&l.push(f(i)+(r?": ":":")+c);return c=0===l.length?"{}":r?"{\n"+r+l.join(",\n"+r)+"\n"+d+"}":"{"+l.join(",")+"}",r=d,c}}t.exports=function(t,e,u){var i;if(r="",n="","number"==typeof u)for(i=0;i<u;i+=1)n+=" ";else"string"==typeof u&&(n=u);if(o=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return a("",{"":t})}},"vN+2":function(t,e){t.exports=function(){}},vR07:function(t,e,r){(function(e){const n=r("kX2E"),o=r("Z7Q3");var u=function(){};function i(t){return t.startsWith("int[")?"int256"+t.slice(3):"int"===t?"int256":t.startsWith("uint[")?"uint256"+t.slice(4):"uint"===t?"uint256":t.startsWith("fixed[")?"fixed128x128"+t.slice(5):"fixed"===t?"fixed128x128":t.startsWith("ufixed[")?"ufixed128x128"+t.slice(6):"ufixed"===t?"ufixed128x128":t}function f(t){return parseInt(/^\D+(\d+)$/.exec(t)[1],10)}function a(t){var e=/^\D+(\d+)x(\d+)$/.exec(t);return[parseInt(e[1],10),parseInt(e[2],10)]}function c(t){var e=t.match(/(.*)\[(.*?)\]$/);return e?""===e[2]?"dynamic":parseInt(e[2],10):null}function s(t){var e=typeof t;if("string"===e)return n.isHexPrefixed(t)?new o(n.stripHexPrefix(t),16):new o(t,10);if("number"===e)return new o(t);if(t.toArray)return t;throw new Error("Argument is not a number")}function l(t){var e=/^(\w+)\((.*)\)$/.exec(t);if(3!==e.length)throw new Error("Invalid method signature");var r=/^(.+)\):\((.+)$/.exec(e[2]);if(null!==r&&3===r.length)return{method:e[1],args:r[1].split(","),retargs:r[2].split(",")};var n=e[2].split(",");return 1===n.length&&""===n[0]&&(n=[]),{method:e[1],args:n}}function d(t,r){var u,i,l,p;if("address"===t)return d("uint160",s(r));if("bool"===t)return d("uint8",r?1:0);if("string"===t)return d("bytes",e.from(r,"utf8"));if(v(t)){if(void 0===r.length)throw new Error("Not an array?");if("dynamic"!==(u=c(t))&&0!==u&&r.length>u)throw new Error("Elements exceed array size: "+u);for(p in l=[],t=t.slice(0,t.lastIndexOf("[")),"string"==typeof r&&(r=JSON.parse(r)),r)l.push(d(t,r[p]));if("dynamic"===u){var y=d("uint256",r.length);l.unshift(y)}return e.concat(l)}if("bytes"===t)return r=e.from(r),l=e.concat([d("uint256",r.length),r]),r.length%32!=0&&(l=e.concat([l,n.zeros(32-r.length%32)])),l;if(t.startsWith("bytes")){if((u=f(t))<1||u>32)throw new Error("Invalid bytes<N> width: "+u);return n.setLengthRight(r,32)}if(t.startsWith("uint")){if((u=f(t))%8||u<8||u>256)throw new Error("Invalid uint<N> width: "+u);if((i=s(r)).bitLength()>u)throw new Error("Supplied uint exceeds width: "+u+" vs "+i.bitLength());if(i<0)throw new Error("Supplied uint is negative");return i.toArrayLike(e,"be",32)}if(t.startsWith("int")){if((u=f(t))%8||u<8||u>256)throw new Error("Invalid int<N> width: "+u);if((i=s(r)).bitLength()>u)throw new Error("Supplied int exceeds width: "+u+" vs "+i.bitLength());return i.toTwos(256).toArrayLike(e,"be",32)}if(t.startsWith("ufixed")){if(u=a(t),(i=s(r))<0)throw new Error("Supplied ufixed is negative");return d("uint256",i.mul(new o(2).pow(new o(u[1]))))}if(t.startsWith("fixed"))return u=a(t),d("int256",s(r).mul(new o(2).pow(new o(u[1]))));throw new Error("Unsupported or invalid type: "+t)}function p(t,r,n){var u,i,f,a;if("string"==typeof t&&(t=y(t)),"address"===t.name)return p(t.rawType,r,n).toArrayLike(e,"be",20).toString("hex");if("bool"===t.name)return p(t.rawType,r,n).toString()===new o(1).toString();if("string"===t.name){var c=p(t.rawType,r,n);return e.from(c,"utf8").toString()}if(t.isArray){for(f=[],u=t.size,"dynamic"===t.size&&(n=p("uint256",r,n).toNumber(),u=p("uint256",r,n).toNumber(),n+=32),a=0;a<u;a++){var s=p(t.subArray,r,n);f.push(s),n+=t.subArray.memoryUsage}return f}if("bytes"===t.name)return n=p("uint256",r,n).toNumber(),u=p("uint256",r,n).toNumber(),r.slice(n+32,n+32+u);if(t.name.startsWith("bytes"))return r.slice(n,n+t.size);if(t.name.startsWith("uint")){if((i=new o(r.slice(n,n+32),16,"be")).bitLength()>t.size)throw new Error("Decoded int exceeds width: "+t.size+" vs "+i.bitLength());return i}if(t.name.startsWith("int")){if((i=new o(r.slice(n,n+32),16,"be").fromTwos(256)).bitLength()>t.size)throw new Error("Decoded uint exceeds width: "+t.size+" vs "+i.bitLength());return i}if(t.name.startsWith("ufixed")){if(u=new o(2).pow(new o(t.size[1])),!(i=p("uint256",r,n)).mod(u).isZero())throw new Error("Decimals not supported yet");return i.div(u)}if(t.name.startsWith("fixed")){if(u=new o(2).pow(new o(t.size[1])),!(i=p("int256",r,n)).mod(u).isZero())throw new Error("Decimals not supported yet");return i.div(u)}throw new Error("Unsupported or invalid type: "+t.name)}function y(t){var e,r,n;if(v(t)){e=c(t);var o=t.slice(0,t.lastIndexOf("["));return o=y(o),{isArray:!0,name:t,size:e,memoryUsage:"dynamic"===e?32:o.memoryUsage*e,subArray:o}}switch(t){case"address":n="uint160";break;case"bool":n="uint8";break;case"string":n="bytes"}if(r={rawType:n,name:t,memoryUsage:32},t.startsWith("bytes")&&"bytes"!==t||t.startsWith("uint")||t.startsWith("int")?r.size=f(t):(t.startsWith("ufixed")||t.startsWith("fixed"))&&(r.size=a(t)),t.startsWith("bytes")&&"bytes"!==t&&(r.size<1||r.size>32))throw new Error("Invalid bytes<N> width: "+r.size);if((t.startsWith("uint")||t.startsWith("int"))&&(r.size%8||r.size<8||r.size>256))throw new Error("Invalid int/uint<N> width: "+r.size);return r}function h(t){return"string"===t||"bytes"===t||"dynamic"===c(t)}function v(t){return t.lastIndexOf("]")===t.length-1}function b(t,e){return t.startsWith("address")||t.startsWith("bytes")?"0x"+e.toString("hex"):e.toString()}u.eventID=function(t,r){var o=t+"("+r.map(i).join(",")+")";return n.keccak256(e.from(o))},u.methodID=function(t,e){return u.eventID(t,e).slice(0,4)},u.rawEncode=function(t,r){var n=[],o=[],u=0;t.forEach(function(t){if(v(t)){var e=c(t);u+="dynamic"!==e?32*e:32}else u+=32});for(var f=0;f<t.length;f++){var a=i(t[f]),s=d(a,r[f]);h(a)?(n.push(d("uint256",u)),o.push(s),u+=s.length):n.push(s)}return e.concat(n.concat(o))},u.rawDecode=function(t,r){var n=[];r=e.from(r);for(var o=0,u=0;u<t.length;u++){var f=y(i(t[u])),a=p(f,r,o);o+=f.memoryUsage,n.push(a)}return n},u.simpleEncode=function(t){var r=Array.prototype.slice.call(arguments).slice(1),n=l(t);if(r.length!==n.args.length)throw new Error("Argument count mismatch");return e.concat([u.methodID(n.method,n.args),u.rawEncode(n.args,r)])},u.simpleDecode=function(t,e){var r=l(t);if(!r.retargs)throw new Error("No return values in method");return u.rawDecode(r.retargs,e)},u.stringify=function(t,e){var r=[];for(var n in t){var o=t[n],u=e[n];u=/^[^\[]+\[.*\]$/.test(o)?u.map(function(t){return b(o,t)}).join(", "):b(o,u),r.push(u)}return r},u.solidityHexValue=function(t,r,o){var i,a;if(v(t)){var l=t.replace(/\[.*?\]/,"");if(!v(l)){var d=c(t);if("dynamic"!==d&&0!==d&&r.length>d)throw new Error("Elements exceed array size: "+d)}var p=r.map(function(t){return u.solidityHexValue(l,t,256)});return e.concat(p)}if("bytes"===t)return r;if("string"===t)return e.from(r,"utf8");if("bool"===t){o=o||8;var y=Array(o/4).join("0");return e.from(r?y+"1":y+"0","hex")}if("address"===t){var h=20;return o&&(h=o/8),n.setLengthLeft(r,h)}if(t.startsWith("bytes")){if((i=f(t))<1||i>32)throw new Error("Invalid bytes<N> width: "+i);return n.setLengthRight(r,i)}if(t.startsWith("uint")){if((i=f(t))%8||i<8||i>256)throw new Error("Invalid uint<N> width: "+i);if((a=s(r)).bitLength()>i)throw new Error("Supplied uint exceeds width: "+i+" vs "+a.bitLength());return a.toArrayLike(e,"be",(o=o||i)/8)}if(t.startsWith("int")){if((i=f(t))%8||i<8||i>256)throw new Error("Invalid int<N> width: "+i);if((a=s(r)).bitLength()>i)throw new Error("Supplied int exceeds width: "+i+" vs "+a.bitLength());return o=o||i,a.toTwos(i).toArrayLike(e,"be",o/8)}throw new Error("Unsupported or invalid type: "+t)},u.solidityPack=function(t,r){if(t.length!==r.length)throw new Error("Number of types are not matching the values");for(var n=[],o=0;o<t.length;o++){var f=i(t[o]);n.push(u.solidityHexValue(f,r[o],null))}return e.concat(n)},u.soliditySHA3=function(t,e){return n.keccak256(u.solidityPack(t,e))},u.soliditySHA256=function(t,e){return n.sha256(u.solidityPack(t,e))},u.solidityRIPEMD160=function(t,e){return n.ripemd160(u.solidityPack(t,e),!0)},u.fromSerpent=function(t){for(var e,r=[],n=0;n<t.length;n++){var o=t[n];if("s"===o)r.push("bytes");else if("b"===o){for(var u="bytes",i=n+1;i<t.length&&(e=t[i])>="0"&&e<="9";)u+=t[i]-"0",i++;n=i-1,r.push(u)}else if("i"===o)r.push("int256");else{if("a"!==o)throw new Error("Unsupported or invalid type: "+o);r.push("int256[]")}}return r},u.toSerpent=function(t){for(var e=[],r=0;r<t.length;r++){var n=t[r];if("bytes"===n)e.push("s");else if(n.startsWith("bytes"))e.push("b"+f(n));else if("int256"===n)e.push("i");else{if("int256[]"!==n)throw new Error("Unsupported or invalid type: "+n);e.push("a")}}return e.join("")},t.exports=u}).call(this,r("tjlA").Buffer)},wJg7:function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}}}]);