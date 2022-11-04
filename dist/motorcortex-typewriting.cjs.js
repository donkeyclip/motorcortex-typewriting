'use strict';

var motorcortex = require('@donkeyclip/motorcortex');

class TypeWritingIncident extends motorcortex.Effect {
  onGetContext() {
    this.element.style = this.attrs.css;
    this.cursorElement = `<span style="${this.attrs.cursorCss}">|</span>`;
    this.delay = this.attrs.blinkDelay || 0;
    this.hiatus = this.attrs.blinkhiatus || 0;
  }
  getScratchValue() {
    return "";
  }
  onProgress(currentTime) {
    let text = "";
    if (this.getFraction(currentTime) == 1) {
      this.element.innerHTML = text;
      return;
    }
    const duration = 6000;
    const typeFraction = (duration - this.delay - this.hiatus) / duration;
    const delayFraction = this.delay / duration;
    let currentTypefraction = (this.getFraction(currentTime) - delayFraction) / typeFraction;
    if (currentTypefraction < 0) currentTypefraction = 0;
    const currentTextLength = this.targetValue.length * currentTypefraction;
    text += this.targetValue.slice(0, currentTextLength);
    const {
      showCursor
    } = this.attrs;
    const ishalfOfSecond = parseInt(currentTime / 500) % 2;
    const beforeTyping = currentTime < this.delay;
    const afterTyping = currentTime > this.props.duration - this.hiatus;
    const typing = !beforeTyping && !afterTyping;
    if (showCursor && (ishalfOfSecond || typing)) {
      text += this.cursorElement;
    }
    this.element.innerHTML = text;
  }
}

var TypeWritingIncidentDefinition = {
  npm_name: "type-writing-definition",
  version: "1.0.0",
  incidents: [{
    exportable: TypeWritingIncident,
    name: "TypeWritingIncident",
    attributesValidationRules: {}
  }]
};

const TypeWritingPlugin = motorcortex.loadPlugin(TypeWritingIncidentDefinition);

/*EXPORTED CLIP*/
class ParseText extends motorcortex.HTMLClip {
  get html() {
    return `
        <div class="container">${this.attrs.text}</div>
      `;
  }
  get css() {
    return `
      .container {
        width: 100%;
        height: 100%;
      }
    `;
  }
  buildTree() {
    const {
      css,
      showCursor,
      cursorCss,
      blinkDelay,
      blinkhiatus,
      text
    } = this.attrs;
    const typewrite = new TypeWritingPlugin.TypeWritingIncident({
      css,
      showCursor,
      cursorCss,
      blinkDelay,
      blinkhiatus,
      animatedAttrs: {
        text
      }
    }, {
      duration: 6000,
      selector: ".container"
    });
    this.addIncident(typewrite, 0);
  }
}

const TypeWritingVal = {
  css: {
    optional: true,
    type: "string"
  },
  showCursor: {
    optional: true,
    type: "boolean"
  },
  cursorCss: {
    optional: true,
    type: "string"
  },
  blinkDelay: {
    optional: false,
    type: "number",
    min: 0
  },
  blinkhiatus: {
    optional: true,
    type: "number",
    min: 0
  },
  text: {
    type: "string",
    optional: true
  }
};

var name$1 = "@donkeyclip/motorcortex-typewriting";
var version$1 = "4.1.0";
var description = "typewriting plugin for MotorCortex";
var main = "dist/motorcortex-typewriting.cjs.js";
var module$1 = "dist/motorcortex-typewriting.esm.js";
var browser = "dist/motorcortex-typewriting.umd.js";
var author = "Donkeyclip (donkeyclip.com) <opensource@donkeyclip.com>";
var repository = {
	type: "git",
	url: "https://github.com/donkeyclip/motorcortex-typewriting.git"
};
var license = "MIT";
var engines = {
	node: ">=12"
};
var scripts = {
	lint: "eslint -c .eslintrc src/**/*.js",
	"lint:fix": "npm run lint -- --fix",
	build: "npm run build:lib && npm run build:demo",
	"build:lib": "rollup -c",
	start: "npm run build:lib && concurrently -c \"cyan.bold,magenta.bold\" \"npm:build:lib -- -w\"  \"npm:start:demo\" ",
	"start:demo": "webpack serve --config ./demo/webpack.config.js --mode=development --progress ",
	"build:demo": "webpack --mode=production --config ./demo/webpack.config.js",
	test: "HERE GOES YOUR TEST TASK",
	"test:prod": "npm run lint",
	prebuild: "rimraf dist",
	prepare: "husky install"
};
var keywords = [
	"motorcortex",
	"animation"
];
var peerDependencies = {
	"@donkeyclip/motorcortex": ">= 8 < 10"
};
var devDependencies = {
	"@babel/cli": "7.19.3",
	"@babel/core": "7.20.2",
	"@babel/eslint-parser": "7.19.1",
	"@babel/plugin-syntax-jsx": "7.18.6",
	"@babel/plugin-transform-react-jsx": "7.19.0",
	"@babel/preset-env": "7.20.2",
	"@donkeyclip/motorcortex": "9.4.1",
	"@donkeyclip/motorcortex-player": "2.10.7",
	"@rollup/plugin-babel": "5.3.1",
	"@rollup/plugin-commonjs": "22.0.2",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.3.0",
	"babel-loader": "8.3.0",
	concurrently: "7.5.0",
	"core-js": "3.26.0",
	"css-loader": "6.7.1",
	eslint: "7.32.0",
	"eslint-config-prettier": "8.5.0",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.26.0",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "4.2.1",
	"eslint-plugin-promise": "6.1.1",
	husky: "8.0.1",
	"lint-staged": "13.0.3",
	monorepo: "1.2.2",
	prettier: "2.7.1",
	rimraf: "3.0.2",
	rollup: "2.79.1",
	"rollup-plugin-terser": "7.0.2",
	tslib: "2.4.1",
	webpack: "5.74.0",
	"webpack-cli": "4.10.0",
	"webpack-dev-server": "4.11.1"
};
var pkg = {
	name: name$1,
	version: version$1,
	description: description,
	main: main,
	module: module$1,
	browser: browser,
	author: author,
	repository: repository,
	license: license,
	engines: engines,
	scripts: scripts,
	keywords: keywords,
	"lint-staged": {
	"*.{json,md,yml,yaml,css}": [
		"prettier --write"
	],
	"*.{js,jsx}": [
		"prettier --write",
		"eslint --fix"
	]
},
	peerDependencies: peerDependencies,
	devDependencies: devDependencies
};

const {
  name,
  version
} = pkg;
var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: ParseText,
    name: "TypeWriting",
    attributesValidationRules: TypeWritingVal
  }]
};

module.exports = index;
