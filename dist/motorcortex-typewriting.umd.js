!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@kissmybutton/motorcortex")):"function"==typeof define&&define.amd?define(["exports","@kissmybutton/motorcortex"],e):e((t=t||self)["@kissmybutton/motorcortex-typewriting"]={},t.MotorCortex)}(this,(function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var s={},u={duration:1e3,round:0},c=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],l={CSS:{}};function f(t,e,n){return Math.min(Math.max(t,e),n)}function d(t,e){return t.indexOf(e)>-1}var p={arr:function(t){return Array.isArray(t)},obj:function(t){return d(Object.prototype.toString.call(t),"Object")},pth:function(t){return p.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||p.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return p.hex(t)||p.rgb(t)||p.hsl(t)},key:function(t){return!s.hasOwnProperty(t)&&!u.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}},h={linear:function(){return function(t){return t}}};function m(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,o=[],a=0;a<n;a++)if(a in t){var i=t[a];e.call(r,i,a,t)&&o.push(i)}return o}function v(t){return t.reduce((function(t,e){return t.concat(p.arr(e)?v(e):e)}),[])}function g(t){return p.arr(t)?t:(p.str(t)&&(t=function(t){try{return document.querySelectorAll(t)}catch(t){return}}(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function y(t,e){return t.some((function(t){return t===e}))}function b(t){var e={};for(var n in t)e[n]=t[n];return e}function w(t,e){var n=b(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function x(t,e){var n=b(t);for(var r in e)n[r]=p.und(t[r])?e[r]:t[r];return n}function O(t){return p.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:p.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):p.hsl(t)?function(t){var e,n,r,o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),a=parseInt(o[1],10)/360,i=parseInt(o[2],10)/100,s=parseInt(o[3],10)/100,u=o[4]||1;function c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==i)e=n=r=s;else{var l=s<.5?s*(1+i):s+i-s*i,f=2*s-l;e=c(f,l,a+1/3),n=c(f,l,a),r=c(f,l,a-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+u+")"}(t):void 0;var e,n}function P(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function j(t,e){return p.fnc(t)?t(e.target,e.id,e.total):t}function k(t,e){return t.getAttribute(e)}function _(t,e,n){if(y([n,"deg","rad","turn"],P(e)))return e;var r=l.CSS[e+n];if(!p.und(r))return r;var o=document.createElement(t.tagName),a=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=100+n;var i=100/o.offsetWidth;a.removeChild(o);var s=i*parseFloat(e);return l.CSS[e+n]=s,s}function C(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?_(t,o,n):o}}function M(t,e){return p.dom(t)&&!p.inp(t)&&(k(t,e)||p.svg(t)&&t[e])?"attribute":p.dom(t)&&y(c,e)?"transform":p.dom(t)&&"transform"!==e&&C(t,e)?"css":null!=t[e]?"object":void 0}function S(t){if(p.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,o=new Map;e=r.exec(n);)o.set(e[1],e[2]);return o}}function A(t,e,n,r){var o=d(e,"scale")?1:0+function(t){return d(t,"translate")||"perspective"===t?"px":d(t,"rotate")||d(t,"skew")?"deg":void 0}(e),a=S(t).get(e)||o;return n&&(n.transforms.list.set(e,a),n.transforms.last=e),r?_(t,a,r):a}function I(t,e,n,r){switch(M(t,e)){case"transform":return A(t,e,r,n);case"css":return C(t,e,n);case"attribute":return k(t,e);default:return t[e]||0}}function E(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=P(t)||0,o=parseFloat(e),a=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return o+a+r;case"-":return o-a+r;case"*":return o*a+r}}function T(t,e){if(p.col(t))return O(t);if(/\s/g.test(t))return t;var n=P(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function V(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=T(p.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:p.str(t)||e?r.split(n):[]}}function X(t){var e=function(t){return m(t?v(p.arr(t)?t.map(g):g(t)):[],(function(t,e,n){return n.indexOf(t)===e}))}(t);return e.map((function(t,n){return{target:t,id:n,total:e.length,transforms:{list:S(t)}}}))}function Y(t,e){var n=b(e);if(p.arr(t)){var r=t.length;2===r&&!p.obj(t[0])?t={value:t}:p.fnc(e.duration)||(n.duration=e.duration/r)}return(p.arr(t)?t:[t]).map((function(t,e){return p.obj(t)&&!p.pth(t)?t:{value:t}})).map((function(t){return x(t,n)}))}function z(t,e){var n;return t.tweens.map((function(r){var o=function(t,e){var n={};for(var r in t){var o=j(t[r],e);p.arr(o)&&1===(o=o.map((function(t){return j(t,e)}))).length&&(o=o[0]),n[r]=o}return n.duration=parseFloat(n.duration),n}(r,e),a=o.value,i=p.arr(a)?a[1]:a,s=P(i),u=I(e.target,t.name,s,e),c=n?n.to.original:u,l=p.arr(a)?a[0]:c,f=P(l)||P(u),d=s||f;return p.und(i)&&(i=c),o.from=V(l,d),o.to=V(E(i,l),d),o.start=n?n.end:0,o.end=o.start+o.duration,o.isPath=!1,o.isColor=p.col(o.from.original),o.isColor&&(o.round=1),n=o,o}))}var N={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,o){if(r.list.set(e,n),e===r.last||o){var a="";r.list.forEach((function(t,e){a+=e+"("+t+") "})),t.style.transform=a}}};function Z(t,e){X(t).forEach((function(t){for(var n in e){var r=j(e[n],t),o=t.target,a=P(r),i=I(o,n,a,t),s=E(T(r,a||P(i)),i),u=M(o,n);N[u](o,n,s,t.transforms,!0)}}))}function $(t,e){return m(v(t.map((function(t){return e.map((function(e){return function(t,e){var n=M(t.target,e.name);if(n){var r=z(e,t),o=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:o.end}}}(t,e)}))}))),(function(t){return!p.und(t)}))}var F=0;function K(t){var e=w(s,t),n=w(u,t),r=function(t,e){var n=[];for(var r in e)p.key(r)&&n.push({name:r,tweens:Y(e[r],t)});return n}(n,t),o=X(t.targets),a=$(o,r),i=function(t,e){var n=t.length,r={};return r.duration=n?Math.max.apply(Math,t.map((function(t){return t.duration}))):e.duration,r}(a,n),c=F;return F++,x(e,{id:c,children:[],animatables:o,animations:a,duration:i.duration})}function L(t){void 0===t&&(t={});var e,n=0,r=null;function o(t){var e=window.Promise&&new Promise((function(t){return r=t}));return t.finished=e,e}var a=K(t);o(a);function i(t,e){e&&e.seek(t)}function s(t){var s=a.duration,u=t;a.progress=f(u/s*100,0,100),a.reversePlayback=u<a.currentTime,e&&function(t){if(a.reversePlayback)for(var r=n;r--;)i(t,e[r]);else for(var o=0;o<n;o++)i(t,e[o])}(u),!a.began&&a.currentTime>0&&(a.began=!0),function(t){for(var e=0,n=a.animations,r=n.length;e<r;){var o=n[e],i=o.animatable,s=o.tweens,u=s.length-1,c=s[u];u&&(c=m(s,(function(e){return t<e.end}))[0]||c);for(var l=f(t-c.start,0,c.duration)/c.duration,d=c.to.strings,p=c.round,h=[],v=c.to.numbers.length,g=void 0,y=0;y<v;y++){var b=void 0,w=c.to.numbers[y],x=c.from.numbers[y]||0;b=x+l*(w-x),p&&(c.isColor&&y>2||(b=Math.round(b*p)/p)),h.push(b)}var O=d.length;if(O){g=d[0];for(var P=0;P<O;P++){d[P];var j=d[P+1],k=h[P];isNaN(k)||(g+=j?k+j:k+" ")}}else g=h[0];N[o.type](i.target,o.property,g,i.transforms),o.currentValue=g,e++}}(u),a.currentTime=f(u,0,s),t>=s&&(a.paused=!0,a.completed||(a.completed=!0,!a.passThrough&&"Promise"in window&&(r(),o(a))))}return a.reset=function(){a.passThrough=!1,a.currentTime=0,a.progress=0,a.paused=!0,a.began=!1,a.completed=!1,a.reversePlayback=!1,e=a.children;for(var t=n=e.length;t--;)a.children[t].reset()},a.set=function(t,e){return Z(t,e),a},a.seek=function(t){s(t)},a.reset(),a}L.version="3.1.0",L.get=I,L.set=Z,L.convertPx=_,L.penner=h;var R={transform:["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY","perspective"]};var q,D,G=function(t,e){var n=t.getComputedStyle(e).transform;if(""===n||"none"===n)return{};var r,o,a,i,s,u,c,l,f=n.split("(")[1].split(")")[0].split(",");return r=f,o=Math.atan2(r[1],r[0]),a=Math.pow(r[0],2)+Math.pow(r[1],2),i=Math.pow(r[2],2)+Math.pow(r[3],2),s=Math.sqrt(a),u=(r[0]*r[3]-r[2]*r[1])/s,c=Math.atan2(r[0]*r[2]+r[1]*r[3],a),l=Math.atan2(r[1]*r[3]+r[0]*r[2],i),{rotate:o/(Math.PI/180)+"deg",scaleX:s,scaleY:u,skewX:(1===a?c/(Math.PI/180):0)+"deg",skewY:(1===i?l/(Math.PI/180):0)+"deg",translateX:r[4]+"px",translateY:r[5]+"px"}},H=(q=Object.freeze({__proto__:null,default:L}))&&q.default||q,W=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,o=(r=H)&&r.__esModule?r:{default:r};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(){return s(this,e),c(this,l(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(r=[{key:"onGetContext",value:function(){var t={},e={};if(R.hasOwnProperty(this.attributeKey))for(var n=R[this.attributeKey],r=0;r<n.length;r++)this.targetValue.hasOwnProperty(n[r])&&(t[n[r]]=[this.getInitialValue()[n[r]],this.targetValue[n[r]]],e[n[r]]=[this.getScratchValue(),this.targetValue[n[r]]]);else t[this.attributeKey]=[this.getInitialValue(),this.targetValue],e[this.targetValue]=[this.getScratchValue(),this.targetValue];this.target=(0,o.default)(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}({autoplay:!1,duration:this.props.duration,easing:"linear",targets:this.element},(this.attrs||{}).attrs||{},t))}},{key:"getScratchValue",value:function(){if("transform"===this.attributeKey){for(var t={},e=R[this.attributeKey],n=G(this.context.window,this.element),r=0;r<e.length;r++)n.hasOwnProperty(e[r])?t[e[r]]=n[e[r]]:t[e[r]]=o.default.get(this.element,e[r]);return t}return o.default.get(this.element,this.attributeKey)}},{key:"onProgress",value:function(t){return this.target.seek(this.target.duration*t)}}])&&u(n.prototype,r),a&&u(n,a),e}(e.API.MonoIncident);n.default=d}));(D=W)&&D.__esModule&&Object.prototype.hasOwnProperty.call(D,"default")&&D.default;var B={npm_name:"@kissmybutton/motorcortex-anime",incidents:[{exportable:W,name:"Anime"}],compositeAttributes:R},J=e.loadPlugin(B),Q={npm_name:"@kissmybutton/motorcortex-typewriting",incidents:[{exportable:function(t){function s(){return n(this,s),i(this,o(s).apply(this,arguments))}var u,c,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(s,t),u=s,(c=[{key:"buildTree",value:function(){for(var t=this.attrs.title.split(""),n="",r=0;r<t.length;r++)n+="<span class='letter letter".concat(r+1,"'>").concat(t[r],"</span>");var o=new e.Clip({css:this.css,html:' <div class="textContainer" >'.concat(n.split("undefined")[1]," </div>"),selector:".onemore"}),a=new J.Anime({animatedAttrs:{borderRight:"2px solid rgba(".concat(this.attrs.cursorColor[0],",").concat(this.attrs.cursorColor[1],",").concat(this.attrs.cursorColor[2],",0)")},initialValues:{borderRight:"2px solid rgba(".concat(this.attrs.cursorColor[0],",").concat(this.attrs.cursorColor[1],",").concat(this.attrs.cursorColor[2],",1)")},attrs:{easing:"linear"}},{duration:this.attrs.blinkingDuration,selector:".onemore",repeats:10,delay:this.attrs.blinkDelay});this.attrs.blinking&&this.addIncident(a,0),this.addIncident(o,0);for(var i=0,s=0;s<=t.length;s++){i+=12*this.attrs.size;var u=new J.Anime({animatedAttrs:{width:"".concat(i,"px")},attrs:{easing:"linear"}},{duration:50,selector:".onemore",delay:50});this.addIncident(u,50*s)}for(var c=0;c<=this.attrs.erase;c++){i-=12*this.attrs.size;var l=new J.Anime({animatedAttrs:{width:"".concat(i,"px")},attrs:{easing:"linear"}},{duration:50,selector:".onemore",delay:50});this.addIncident(l,50*t.length+100+100*(c+1))}if(this.attrs.eraseAll)for(var f=0;f<=t.length;f++){i-=12*this.attrs.size;var d=new J.Anime({animatedAttrs:{width:"".concat(i,"px")},attrs:{easing:"linear"}},{duration:50,selector:".onemore",delay:50});this.addIncident(d,50*t.length+100+100*(this.attrs.erase+1)+100*(f+1)+this.attrs.delayIfEraseAll)}}},{key:"html",get:function(){return'\n     <div class="wrapper">\n      <div class="onemore">\n      \n      </div>\n    </div>'}},{key:"css",get:function(){return"\n    .wrapper{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      \n    }\n    .textContainer{\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      padding-right: 2px;\n      width: ".concat(12*this.attrs.size*this.attrs.title.length,"px;\n     \n    }\n    \n    .letter{\n      font-size: ").concat(14*this.attrs.size,"px;\n      position: relative;\n      text-align: center;\n      width: ").concat(12*this.attrs.size,"px;\n      display: flex;\n      justify-content: center;\n      flex: 1 0;\n      color: ").concat(this.attrs.textColor,"\n    }\n    .onemore{\n      white-space: nowrap;\n      overflow: hidden;\n      align-items: center;\n      padding-right: 2px;\n      width: 0px;\n\n    }\n\n  ")}}])&&r(u.prototype,c),l&&r(u,l),s}(e.API.Clip),name:"TypeWriting"}]},U=Q.npm_name,tt=Q.incidents;t.default=Q,t.incidents=tt,t.npm_name=U,Object.defineProperty(t,"__esModule",{value:!0})}));
