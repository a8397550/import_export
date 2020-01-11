(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./app.main"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./app.main"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.main);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_main) {
  "use strict";

  _main = _interopRequireDefault(_main);

  function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  console.log(_main["default"]);
});
