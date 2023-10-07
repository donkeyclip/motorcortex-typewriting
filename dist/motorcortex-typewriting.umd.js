!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["@donkeyclip/motorcortex-typewriting"]=t(e.MotorCortex)}(this,(function(e){"use strict";class t extends e.Effect{onGetContext(){this.element.style=this.attrs.css,this.cursorElement=`<span style="${this.attrs.cursorCss}">|</span>`,this.delay=this.attrs.blinkDelay||0,this.hiatus=this.attrs.blinkhiatus||0}getScratchValue(){return""}onProgress(e){let t="";if(1==this.getFraction(e))return void(this.element.innerHTML=t);const i=6e3,n=(i-this.delay-this.hiatus)/i,r=this.delay/i;let s=(this.getFraction(e)-r)/n;s<0&&(s=0);const o=this.targetValue.length*s;t+=this.targetValue.slice(0,o);const{showCursor:l}=this.attrs,a=parseInt(e/500)%2,p=e<this.delay,c=e>this.props.duration-this.hiatus;l&&(a||!p&&!c)&&(t+=this.cursorElement),this.element.innerHTML=t}}var i={npm_name:"type-writing-definition",version:"1.0.0",incidents:[{exportable:t,name:"TypeWritingIncident",attributesValidationRules:{}}]};const n=e.loadPlugin(i);class r extends e.HTMLClip{get html(){return`\n        <div class="container">${this.attrs.text}</div>\n      `}get css(){return"\n      .container {\n        width: 100%;\n        height: 100%;\n      }\n    "}buildTree(){const{css:e,showCursor:t,cursorCss:i,blinkDelay:r,blinkhiatus:s,text:o}=this.attrs,l=new n.TypeWritingIncident({css:e,showCursor:t,cursorCss:i,blinkDelay:r,blinkhiatus:s,animatedAttrs:{text:o}},{duration:6e3,selector:".container"});this.addIncident(l,0)}}var s={name:"@donkeyclip/motorcortex-typewriting",version:"4.1.0",description:"typewriting plugin for MotorCortex",main:"dist/motorcortex-typewriting.cjs.js",module:"dist/motorcortex-typewriting.esm.js",browser:"dist/motorcortex-typewriting.umd.js",author:"Donkeyclip (donkeyclip.com) <opensource@donkeyclip.com>",repository:{type:"git",url:"https://github.com/donkeyclip/motorcortex-typewriting.git"},license:"MIT",engines:{node:">=12"},scripts:{lint:"eslint -c .eslintrc src/**/*.js","lint:fix":"npm run lint -- --fix",build:"npm run build:lib && npm run build:demo","build:lib":"rollup -c",start:'npm run build:lib && concurrently -c "cyan.bold,magenta.bold" "npm:build:lib -- -w"  "npm:start:demo" ',"start:demo":"webpack serve --config ./demo/webpack.config.js --mode=development --progress ","build:demo":"webpack --mode=production --config ./demo/webpack.config.js",test:"HERE GOES YOUR TEST TASK","test:prod":"npm run lint",prebuild:"rimraf dist",prepare:"husky install"},keywords:["motorcortex","animation"],"lint-staged":{"*.{json,md,yml,yaml,css}":["prettier --write"],"*.{js,jsx}":["prettier --write","eslint --fix"]},peerDependencies:{"@donkeyclip/motorcortex":">= 8 < 10"},devDependencies:{"@babel/cli":"7.23.0","@babel/core":"7.23.0","@babel/eslint-parser":"7.22.15","@babel/plugin-syntax-jsx":"7.22.5","@babel/plugin-transform-react-jsx":"7.22.15","@babel/preset-env":"7.22.20","@donkeyclip/motorcortex":"9.12.0","@donkeyclip/motorcortex-player":"2.10.11","@rollup/plugin-babel":"5.3.1","@rollup/plugin-commonjs":"22.0.2","@rollup/plugin-json":"4.1.0","@rollup/plugin-node-resolve":"13.3.0","babel-loader":"8.3.0",concurrently:"7.6.0","core-js":"3.33.0","css-loader":"6.8.1",eslint:"7.32.0","eslint-config-prettier":"8.10.0","eslint-plugin-babel":"5.3.1","eslint-plugin-import":"2.28.1","eslint-plugin-node":"11.1.0","eslint-plugin-prettier":"4.2.1","eslint-plugin-promise":"6.1.1",husky:"8.0.3","lint-staged":"13.3.0",monorepo:"1.2.2",prettier:"2.8.8",rimraf:"3.0.2",rollup:"2.79.1","rollup-plugin-terser":"7.0.2",tslib:"2.5.2",webpack:"5.84.1","webpack-cli":"4.10.0","webpack-dev-server":"4.15.1"}};const{name:o,version:l}=s;return{npm_name:o,version:l,incidents:[{exportable:r,name:"TypeWriting",attributesValidationRules:{css:{optional:!0,type:"string"},showCursor:{optional:!0,type:"boolean"},cursorCss:{optional:!0,type:"string"},blinkDelay:{optional:!1,type:"number",min:0},blinkhiatus:{optional:!0,type:"number",min:0},text:{type:"string",optional:!0}}}]}}));
