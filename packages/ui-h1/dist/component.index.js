/*! For license information please see component.index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.h1=t():e.h1=t()}(self,(function(){return(()=>{var e={8133:(e,t,r)=>{(t=r(2609)(!1)).push([e.id,".h1{font-size:30px;color:blueviolet}\n",""]),e.exports=t},2609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r,n,o,u=e[1]||"",i=e[3];if(!i)return u;if(t&&"function"==typeof btoa){var a=(r=i,n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(o," */")),c=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[u].concat(c).concat([a]).join("\n")}return[u].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var u=0;u<this.length;u++){var i=this[u][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},7320:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,u){for(var i,a,c=o(e),f=1;f<arguments.length;f++){for(var s in i=Object(arguments[f]))r.call(i,s)&&(c[s]=i[s]);if(t){a=t(i);for(var l=0;l<a.length;l++)n.call(i,a[l])&&(c[a[l]]=i[a[l]])}}return c}},3426:(e,t,r)=>{"use strict";var n=r(7320),o=60103,u=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,c=60112;t.Suspense=60113;var f=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),u=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),i=l("react.provider"),a=l("react.context"),c=l("react.forward_ref"),t.Suspense=l("react.suspense"),f=l("react.memo"),s=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function m(){}function b(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var g=b.prototype=new m;g.constructor=b,n(g,h.prototype),g.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,u={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(u[n]=t[n]);var c=arguments.length-2;if(1===c)u.children=r;else if(1<c){for(var f=Array(c),s=0;s<c;s++)f[s]=arguments[s+2];u.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===u[n]&&(u[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:a,props:u,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case u:c=!0}}if(c)return i=i(c=e),e=""===n?"."+E(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),x(i,t,r,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var s=n+E(a=e[f],f);c+=x(a,t,r,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),f=0;!(a=e.next()).done;)c+=x(a=a.value,t,r,s=n+E(a,f++),i);else if("object"===a)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function k(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function P(){var e=$.current;if(null===e)throw Error(d(321));return e}var M={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:k,forEach:function(e,t,r){k(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return k(e,(function(){t++})),t},toArray:function(e){return k(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},t.Component=h,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var u=n({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in t)j.call(t,s)&&!w.hasOwnProperty(s)&&(u[s]=void 0===t[s]&&void 0!==f?f[s]:t[s])}var s=arguments.length-2;if(1===s)u.children=r;else if(1<s){f=Array(s);for(var l=0;l<s;l++)f[l]=arguments[l+2];u.children=f}return{$$typeof:o,type:e.type,key:i,ref:a,props:u,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},2784:(e,t,r)=>{"use strict";e.exports=r(3426)},9441:(e,t,r)=>{var n=r(6062),o=r(8133);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},6062:(e,t,r)=>{"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),u=[];function i(e){for(var t=-1,r=0;r<u.length;r++)if(u[r].identifier===e){t=r;break}return t}function a(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],f=r[c]||0,s="".concat(c," ").concat(f);r[c]=f+1;var l=i(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(u[l].references++,u[l].updater(p)):u.push({identifier:s,updater:v(p,t),references:1}),n.push(s)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var u=r.nc;u&&(n.nonce=u)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var f,s=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function l(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var u=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(u,i[t]):e.appendChild(u)}}function p(e,t,r){var n=r.css,o=r.media,u=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),u&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d=null,y=0;function v(e,t){var r,n,o;if(t.singleton){var u=y++;r=d||(d=c(t)),n=l.bind(null,r,u,!1),o=l.bind(null,r,u,!0)}else r=c(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=i(r[n]);u[o].references--}for(var c=a(e,t),f=0;f<r.length;f++){var s=i(r[f]);0===u[s].references&&(u[s].updater(),u.splice(s,1))}r=c}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={id:n,exports:{}};return e[n](u,u.exports,r),u.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>t});var e=r(2784);r(9441);const t=({message:t="Hello world"})=>e.createElement("h1",{className:"h1"},t)})(),n})()}));