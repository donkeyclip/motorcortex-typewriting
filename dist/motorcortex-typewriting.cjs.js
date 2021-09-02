'use strict';

var MC = require('@kissmybutton/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MC__default = /*#__PURE__*/_interopDefaultLegacy(MC);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/*INNER PLUGIN*/

var TypeWritingIncident = /*#__PURE__*/function (_MC$Effect) {
  _inherits(TypeWritingIncident, _MC$Effect);

  var _super = _createSuper(TypeWritingIncident);

  function TypeWritingIncident() {
    _classCallCheck(this, TypeWritingIncident);

    return _super.apply(this, arguments);
  }

  _createClass(TypeWritingIncident, [{
    key: "onGetContext",
    value: function onGetContext() {
      this.element.style = this.attrs.css;
      this.cursorElement = "<span style=\"".concat(this.attrs.cursorCss, "\">|</span>");
      this.delay = this.attrs.blinkDelay || 0;
      this.hiatus = this.attrs.blinkhiatus || 0;
    }
  }, {
    key: "getScratchValue",
    value: function getScratchValue() {
      return "";
    }
  }, {
    key: "onProgress",
    value: function onProgress(fraction, currentTime) {
      var text = "";

      if (fraction == 1) {
        this.element.innerHTML = text;
        return;
      }

      var duration = 6000;
      var typeFraction = (duration - this.delay - this.hiatus) / duration;
      var delayFraction = this.delay / duration;
      var currentTypefraction = (fraction - delayFraction) / typeFraction;
      if (currentTypefraction < 0) currentTypefraction = 0;
      var currentTextLength = this.targetValue.length * currentTypefraction;
      text += this.targetValue.slice(0, currentTextLength);
      var showCursor = this.attrs.showCursor;
      var ishalfOfSecond = parseInt(currentTime / 500) % 2;
      var beforeTyping = currentTime < this.delay;
      var afterTyping = currentTime > this.props.duration - this.hiatus;
      var typing = !beforeTyping && !afterTyping;

      if (showCursor && (ishalfOfSecond || typing)) {
        text += this.cursorElement;
      }

      this.element.innerHTML = text;
    }
  }]);

  return TypeWritingIncident;
}(MC__default['default'].Effect);

var TypeWritingIncidentDefinition = {
  npm_name: "type-writing-definition",
  version: "1.0.0",
  incidents: [{
    exportable: TypeWritingIncident,
    name: "TypeWritingIncident",
    attributesValidationRules: {}
  }]
};
var TypeWritingPlugin = MC__default['default'].loadPlugin(TypeWritingIncidentDefinition);
/*EXPORTED CLIP*/

var ParseText = /*#__PURE__*/function (_MC$HTMLClip) {
  _inherits(ParseText, _MC$HTMLClip);

  var _super2 = _createSuper(ParseText);

  function ParseText() {
    _classCallCheck(this, ParseText);

    return _super2.apply(this, arguments);
  }

  _createClass(ParseText, [{
    key: "html",
    get: function get() {
      return "\n      <div class=\"container\">".concat(this.attrs.text, "</div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n    .container {\n      width: 100%;\n      height: 100%;\n    }\n  ";
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var _this$attrs = this.attrs,
          css = _this$attrs.css,
          showCursor = _this$attrs.showCursor,
          cursorCss = _this$attrs.cursorCss,
          blinkDelay = _this$attrs.blinkDelay,
          blinkhiatus = _this$attrs.blinkhiatus,
          text = _this$attrs.text;
      var typewrite = new TypeWritingPlugin.TypeWritingIncident({
        css: css,
        showCursor: showCursor,
        cursorCss: cursorCss,
        blinkDelay: blinkDelay,
        blinkhiatus: blinkhiatus,
        animatedAttrs: {
          text: text
        }
      }, {
        duration: 6000,
        selector: ".container"
      });
      this.addIncident(typewrite, 0);
    }
  }]);

  return ParseText;
}(MC__default['default'].HTMLClip);

var TypeWritingVal = {
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

var name = "@kissmybutton/motorcortex-typewriting";
var version = "3.1.0";

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
