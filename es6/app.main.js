(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.main = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.c = _exports.b = _exports.a = _exports["default"] = void 0;
  var _default = {
    a: 4,
    b: 5,
    c: 6
  };
  _exports["default"] = _default;
  var a = 1;
  _exports.a = a;
  var b = 2;
  _exports.b = b;
  var c = 3;
  _exports.c = c;
});
