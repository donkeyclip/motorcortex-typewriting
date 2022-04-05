import { Effect, loadPlugin, HTMLClip } from '@donkeyclip/motorcortex';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$a = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$9 = fails$a; // Detect IE8's incomplete defineProperty implementation

var descriptors = !fails$9(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var fails$8 = fails$a;
var functionBindNative = !fails$8(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var bind = FunctionPrototype$2.bind;
var call$4 = FunctionPrototype$2.call;
var uncurryThis$e = NATIVE_BIND$1 && bind.bind(call$4, call$4);
var functionUncurryThis = NATIVE_BIND$1 ? function (fn) {
  return fn && uncurryThis$e(fn);
} : function (fn) {
  return fn && function () {
    return call$4.apply(fn, arguments);
  };
};

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global$p = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var global$o = global$p;
var TypeError$7 = global$o.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible$3 = function (it) {
  if (it == undefined) throw TypeError$7("Can't call method on " + it);
  return it;
};

var global$n = global$p;
var requireObjectCoercible$2 = requireObjectCoercible$3;
var Object$4 = global$n.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject$1 = function (argument) {
  return Object$4(requireObjectCoercible$2(argument));
};

var uncurryThis$d = functionUncurryThis;
var toObject = toObject$1;
var hasOwnProperty = uncurryThis$d({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

var DESCRIPTORS$6 = descriptors;
var hasOwn$6 = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = DESCRIPTORS$6 && Object.getOwnPropertyDescriptor;
var EXISTS$1 = hasOwn$6(FunctionPrototype$1, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS$1 && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE$1 = EXISTS$1 && (!DESCRIPTORS$6 || DESCRIPTORS$6 && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS$1,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE$1
};

var objectDefineProperty = {};

// https://tc39.es/ecma262/#sec-iscallable

var isCallable$b = function (argument) {
  return typeof argument == 'function';
};

var isCallable$a = isCallable$b;

var isObject$6 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it);
};

var global$m = global$p;
var isObject$5 = isObject$6;
var document = global$m.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject$5(document) && isObject$5(document.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

var DESCRIPTORS$5 = descriptors;
var fails$7 = fails$a;
var createElement = documentCreateElement; // Thanks to IE8 for its funny defineProperty

var ie8DomDefine = !DESCRIPTORS$5 && !fails$7(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var DESCRIPTORS$4 = descriptors;
var fails$6 = fails$a; // V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$6(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$l = global$p;
var isObject$4 = isObject$6;
var String$3 = global$l.String;
var TypeError$6 = global$l.TypeError; // `Assert: Type(argument) is Object`

var anObject$2 = function (argument) {
  if (isObject$4(argument)) return argument;
  throw TypeError$6(String$3(argument) + ' is not an object');
};

var NATIVE_BIND = functionBindNative;
var call$3 = Function.prototype.call;
var functionCall = NATIVE_BIND ? call$3.bind(call$3) : function () {
  return call$3.apply(call$3, arguments);
};

var global$k = global$p;
var isCallable$9 = isCallable$b;

var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};

var getBuiltIn$4 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$k[namespace]) : global$k[namespace] && global$k[namespace][method];
};

var uncurryThis$c = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$c({}.isPrototypeOf);

var getBuiltIn$3 = getBuiltIn$4;
var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

var global$j = global$p;
var userAgent = engineUserAgent;
var process = global$j.process;
var Deno = global$j.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$2;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version$2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version$2 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$2 = +match[1];
  }
}

var engineV8Version = version$2;

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION$1 = engineV8Version;
var fails$5 = fails$a; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$5(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var global$i = global$p;
var getBuiltIn$2 = getBuiltIn$4;
var isCallable$8 = isCallable$b;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$i.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$8($Symbol) && isPrototypeOf($Symbol.prototype, Object$3(it));
};

var global$h = global$p;
var String$2 = global$h.String;

var tryToString$1 = function (argument) {
  try {
    return String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$g = global$p;
var isCallable$7 = isCallable$b;
var tryToString = tryToString$1;
var TypeError$5 = global$g.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable$1 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw TypeError$5(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1; // `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod

var getMethod$1 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var global$f = global$p;
var call$2 = functionCall;
var isCallable$6 = isCallable$b;
var isObject$3 = isObject$6;
var TypeError$4 = global$f.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$3(val = call$2(fn, input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$3(val = call$2(fn, input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$3(val = call$2(fn, input))) return val;
  throw TypeError$4("Can't convert object to primitive value");
};

var shared$3 = {exports: {}};

var global$e = global$p; // eslint-disable-next-line es/no-object-defineproperty -- safe

var defineProperty$1 = Object.defineProperty;

var setGlobal$3 = function (key, value) {
  try {
    defineProperty$1(global$e, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$e[key] = value;
  }

  return value;
};

var global$d = global$p;
var setGlobal$2 = setGlobal$3;
var SHARED = '__core-js_shared__';
var store$3 = global$d[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;

var store$2 = sharedStore;
(shared$3.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.1',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var uncurryThis$b = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$b(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id + postfix, 36);
};

var global$c = global$p;
var shared$2 = shared$3.exports;
var hasOwn$5 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$2('wks');
var Symbol$2 = global$c.Symbol;
var symbolFor = Symbol$2 && Symbol$2['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

var wellKnownSymbol$5 = function (name) {
  if (!hasOwn$5(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (NATIVE_SYMBOL && hasOwn$5(Symbol$2, name)) {
      WellKnownSymbolsStore[name] = Symbol$2[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore[name];
};

var global$b = global$p;
var call$1 = functionCall;
var isObject$2 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$4 = wellKnownSymbol$5;
var TypeError$3 = global$b.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$4('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive$1 = function (input, pref) {
  if (!isObject$2(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$1(exoticToPrim, input, pref);
    if (!isObject$2(result) || isSymbol$1(result)) return result;
    throw TypeError$3("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$a = global$p;
var DESCRIPTORS$3 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$1 = anObject$2;
var toPropertyKey$2 = toPropertyKey$3;
var TypeError$2 = global$a.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$2(P);
  anObject$1(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey$2(P);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$2('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$2 = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$a = functionUncurryThis;
var defineProperty = objectDefineProperty.f;
var FunctionPrototype = Function.prototype;
var functionToString$1 = uncurryThis$a(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis$a(nameRE.exec);
var NAME = 'name'; // Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name

if (DESCRIPTORS$2 && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString$1(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}

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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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
  Object.defineProperty(subClass, "prototype", {
    writable: false
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

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$3 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$9 = functionUncurryThis;
var toString$3 = uncurryThis$9({}.toString);
var stringSlice = uncurryThis$9(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice(toString$3(it), 8, -1);
};

var global$9 = global$p;
var uncurryThis$8 = functionUncurryThis;
var fails$4 = fails$a;
var classof$4 = classofRaw$1;
var Object$2 = global$9.Object;
var split = uncurryThis$8(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails$4(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$2('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$4(it) == 'String' ? split(it, '') : Object$2(it);
} : Object$2;

var IndexedObject = indexedObject;
var requireObjectCoercible$1 = requireObjectCoercible$3;

var toIndexedObject$4 = function (it) {
  return IndexedObject(requireObjectCoercible$1(it));
};

var DESCRIPTORS$1 = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$2 = createPropertyDescriptor$3;
var toIndexedObject$3 = toIndexedObject$4;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$4 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

objectGetOwnPropertyDescriptor.f = DESCRIPTORS$1 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwn$4(O, P)) return createPropertyDescriptor$2(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

var DESCRIPTORS = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$3;
var createNonEnumerableProperty$3 = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var redefine$1 = {exports: {}};

var uncurryThis$7 = functionUncurryThis;
var isCallable$5 = isCallable$b;
var store$1 = sharedStore;
var functionToString = uncurryThis$7(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$8 = global$p;
var isCallable$4 = isCallable$b;
var inspectSource$2 = inspectSource$3;
var WeakMap$1 = global$8.WeakMap;
var nativeWeakMap = isCallable$4(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var shared$1 = shared$3.exports;
var uid = uid$2;
var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$3 = {};

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$7 = global$p;
var uncurryThis$6 = functionUncurryThis;
var isObject$1 = isObject$6;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$3 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$7.TypeError;
var WeakMap = global$7.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis$6(store.get);
  var wmhas = uncurryThis$6(store.has);
  var wmset = uncurryThis$6(store.set);

  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;

  set = function (it, metadata) {
    if (hasOwn$3(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwn$3(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwn$3(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var global$6 = global$p;
var isCallable$3 = isCallable$b;
var hasOwn$2 = hasOwnProperty_1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var setGlobal$1 = setGlobal$3;
var inspectSource$1 = inspectSource$3;
var InternalStateModule = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(redefine$1.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;

  if (isCallable$3(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }

    if (!hasOwn$2(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$1(value, 'name', name);
    }

    state = enforceInternalState(value);

    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }

  if (O === global$6) {
    if (simple) O[key] = value;else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable$3(this) && getInternalState(this).source || inspectSource$1(this);
});

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var max$1 = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;
var min = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$2 = toIndexedObject$4;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$2; // `Array.prototype.{ indexOf, includes }` methods implementation

var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$5 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;
var push = uncurryThis$5([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }

  return result;
};

var enumBugKeys$1 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;
var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$1 = getBuiltIn$4;
var uncurryThis$4 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$2;
var concat = uncurryThis$4([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$3 = fails$a;
var isCallable$2 = isCallable$b;
var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$2(detection) ? fails$3(detection) : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';
var isForced_1 = isForced$1;

var global$5 = global$p;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$3;
var redefine = redefine$1.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/

var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global$5;
  } else if (STATIC) {
    target = global$5[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$5[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

var classof$3 = classofRaw$1; // `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$1 = Array.isArray || function isArray(argument) {
  return classof$3(argument) == 'Array';
};

var wellKnownSymbol$3 = wellKnownSymbol$5;
var TO_STRING_TAG$1 = wellKnownSymbol$3('toStringTag');
var test = {};
test[TO_STRING_TAG$1] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var global$4 = global$p;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$1 = isCallable$b;
var classofRaw = classofRaw$1;
var wellKnownSymbol$2 = wellKnownSymbol$5;
var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
var Object$1 = global$4.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof$2 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable$1(O.callee) ? 'Arguments' : result;
};

var uncurryThis$3 = functionUncurryThis;
var fails$2 = fails$a;
var isCallable = isCallable$b;
var classof$1 = classof$2;
var getBuiltIn = getBuiltIn$4;
var inspectSource = inspectSource$3;

var noop = function () {
  /* empty */
};

var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$3(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  switch (classof$1(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor$1 = !construct || fails$2(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$3;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var fails$1 = fails$a;
var wellKnownSymbol$1 = wellKnownSymbol$5;
var V8_VERSION = engineV8Version;
var SPECIES$1 = wellKnownSymbol$1('species');

var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails$1(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$1] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var uncurryThis$2 = functionUncurryThis;
var arraySlice = uncurryThis$2([].slice);

var $$1 = _export;
var global$3 = global$p;
var isArray = isArray$1;
var isConstructor = isConstructor$1;
var isObject = isObject$6;
var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var toIndexedObject = toIndexedObject$4;
var createProperty = createProperty$1;
var wellKnownSymbol = wellKnownSymbol$5;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;
var un$Slice = arraySlice;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var SPECIES = wellKnownSymbol('species');
var Array$1 = global$3.Array;
var max = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

$$1({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (isConstructor(Constructor) && (Constructor === Array$1 || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array$1 || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array$1 : Constructor)(max(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var global$2 = global$p;
var classof = classof$2;
var String$1 = global$2.String;

var toString$2 = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$1(argument);
};

var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$1 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$3;
var toString$1 = toString$2;
var whitespaces$1 = whitespaces$2;
var replace = uncurryThis$1(''.replace);
var whitespace = '[' + whitespaces$1 + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$1(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var global$1 = global$p;
var fails = fails$a;
var uncurryThis = functionUncurryThis;
var toString = toString$2;
var trim = stringTrim.trim;
var whitespaces = whitespaces$2;
var $parseInt$1 = global$1.parseInt;
var Symbol$1 = global$1.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22 // MS Edge 18- broken with boxed symbols
|| ITERATOR && !fails(function () {
  $parseInt$1(Object(ITERATOR));
}); // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

var numberParseInt = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt$1(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $ = _export;
var $parseInt = numberParseInt; // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

$({
  global: true,
  forced: parseInt != $parseInt
}, {
  parseInt: $parseInt
});

var TypeWritingIncident = /*#__PURE__*/function (_Effect) {
  _inherits(TypeWritingIncident, _Effect);

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
    value: function onProgress(currentTime) {
      var text = "";

      if (this.getFraction(currentTime) == 1) {
        this.element.innerHTML = text;
        return;
      }

      var duration = 6000;
      var typeFraction = (duration - this.delay - this.hiatus) / duration;
      var delayFraction = this.delay / duration;
      var currentTypefraction = (this.getFraction(currentTime) - delayFraction) / typeFraction;
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
}(Effect);

var TypeWritingIncidentDefinition = {
  npm_name: "type-writing-definition",
  version: "1.0.0",
  incidents: [{
    exportable: TypeWritingIncident,
    name: "TypeWritingIncident",
    attributesValidationRules: {}
  }]
};

var TypeWritingPlugin = loadPlugin(TypeWritingIncidentDefinition);
/*EXPORTED CLIP*/

var ParseText = /*#__PURE__*/function (_HTMLClip) {
  _inherits(ParseText, _HTMLClip);

  var _super = _createSuper(ParseText);

  function ParseText() {
    _classCallCheck(this, ParseText);

    return _super.apply(this, arguments);
  }

  _createClass(ParseText, [{
    key: "html",
    get: function get() {
      return "\n        <div class=\"container\">".concat(this.attrs.text, "</div>\n      ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .container {\n        width: 100%;\n        height: 100%;\n      }\n    ";
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
}(HTMLClip);

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

var name$1 = "@donkeyclip/motorcortex-typewriting";
var version$1 = "4.0.0";
var description = "typewriting plugin for MotorCortex";
var main = "dist/motorcortex-typewriting.cjs.js";
var module = "dist/motorcortex-typewriting.esm.js";
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
	"@donkeyclip/motorcortex": ">= 8 < 9"
};
var devDependencies = {
	"@babel/cli": "7.17.6",
	"@babel/core": "7.17.8",
	"@babel/eslint-parser": "7.17.0",
	"@babel/plugin-syntax-jsx": "7.16.7",
	"@babel/plugin-transform-react-jsx": "7.17.3",
	"@babel/preset-env": "7.16.11",
	"@donkeyclip/motorcortex": "8.0.4",
	"@donkeyclip/motorcortex-player": "2.6.1",
	"@rollup/plugin-babel": "5.3.1",
	"@rollup/plugin-commonjs": "21.0.3",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.1.3",
	"babel-loader": "8.2.4",
	concurrently: "7.1.0",
	"core-js": "3.21.1",
	"css-loader": "6.7.1",
	eslint: "7.32.0",
	"eslint-config-prettier": "8.5.0",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.26.0",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "4.0.0",
	"eslint-plugin-promise": "5.2.0",
	husky: "7.0.4",
	"lint-staged": "12.3.7",
	monorepo: "1.2.2",
	prettier: "2.6.2",
	rimraf: "3.0.2",
	rollup: "2.70.1",
	"rollup-plugin-terser": "7.0.2",
	tslib: "2.3.1",
	webpack: "5.71.0",
	"webpack-cli": "4.9.2",
	"webpack-dev-server": "4.8.0"
};
var pkg = {
	name: name$1,
	version: version$1,
	description: description,
	main: main,
	module: module,
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

var name = pkg.name,
    version = pkg.version;
var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: ParseText,
    name: "TypeWriting",
    attributesValidationRules: TypeWritingVal
  }]
};

export { index as default };
