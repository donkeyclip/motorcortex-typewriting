!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-typewriting"]=e(t.MotorCortex)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}var f=function(t){s(n,t);var e=l(n);function n(){return r(this,n),e.apply(this,arguments)}return o(n,[{key:"onGetContext",value:function(){this.element.style=this.attrs.css,this.cursorElement='<span style="'.concat(this.attrs.cursorCss,'">|</span>'),this.delay=this.attrs.blinkDelay||0,this.hiatus=this.attrs.blinkhiatus||0}},{key:"getScratchValue",value:function(){return""}},{key:"onProgress",value:function(t,e){var n="";if(1!=t){var r=6e3,i=(r-this.delay-this.hiatus)/r,o=(t-this.delay/r)/i;o<0&&(o=0);var s=this.targetValue.length*o;n+=this.targetValue.slice(0,s);var u=this.attrs.showCursor,a=parseInt(e/500)%2,c=e<this.delay,l=e>this.props.duration-this.hiatus;u&&(a||!c&&!l)&&(n+=this.cursorElement),this.element.innerHTML=n}else this.element.innerHTML=n}}]),n}(n.default.Effect),p={npm_name:"type-writing-definition",version:"1.0.0",incidents:[{exportable:f,name:"TypeWritingIncident",attributesValidationRules:{}}]},y=n.default.loadPlugin(p),h=function(t){s(n,t);var e=l(n);function n(){return r(this,n),e.apply(this,arguments)}return o(n,[{key:"html",get:function(){return'\n      <div class="container">'.concat(this.attrs.text,"</div>\n    ")}},{key:"css",get:function(){return"\n    .container {\n      width: 100%;\n      height: 100%;\n    }\n  "}},{key:"buildTree",value:function(){var t=this.attrs,e=t.css,n=t.showCursor,r=t.cursorCss,i=t.blinkDelay,o=t.blinkhiatus,s=t.text,u=new y.TypeWritingIncident({css:e,showCursor:n,cursorCss:r,blinkDelay:i,blinkhiatus:o,animatedAttrs:{text:s}},{duration:6e3,selector:".container"});this.addIncident(u,0)}}]),n}(n.default.HTMLClip);return{npm_name:"@donkeyclip/motorcortex-typewriting",version:"3.0.3",incidents:[{exportable:h,name:"TypeWriting",attributesValidationRules:{css:{optional:!0,type:"string"},showCursor:{optional:!0,type:"boolean"},cursorCss:{optional:!0,type:"string"},blinkDelay:{optional:!1,type:"number",min:0},blinkhiatus:{optional:!0,type:"number",min:0},text:{type:"string",optional:!0}}}]}}));
