parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=n(r))){var t=0,e=function(){};return{s:e,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=r[Symbol.iterator]()},n:function(){var r=o.next();return i=r.done,r},e:function(r){c=!0,a=r},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function t(r){return a(r)||o(r)||n(r)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(r,t){if(r){if("string"==typeof r)return i(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(r,t):void 0}}function o(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function a(r){if(Array.isArray(r))return i(r)}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}for(var c=document.querySelector("tbody"),l=t(c.children),u=document.querySelectorAll("th"),f=0;f<u.length;f++)u[f].id=[f];var s,y=r(u);try{for(y.s();!(s=y.n()).done;){var d=s.value;d.addEventListener("click",function(r){return l.sort(function(t,e){var n=t.cells[r.target.id].innerText,o=e.cells[r.target.id].innerText;switch(r.target.innerText){case"Name":case"Position":return n.localeCompare(o);case"Age":return n-o;case"Salary":return parseInt(n.slice(1))-parseInt(o.slice(1))}}),c.append.apply(c,t(l))})}}catch(m){y.e(m)}finally{y.f()}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.bd75943e.js.map