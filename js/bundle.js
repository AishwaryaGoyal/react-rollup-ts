
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  var __importDefault = function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  __importDefault(require("react"));

  var react_dom_1 = __importDefault(require("react-dom"));

  var HelloWorld_1 = __importDefault(require("./HelloWorld"));

  react_dom_1["default"].render( /*#__PURE__*/React.createElement(HelloWorld_1["default"], null), document.getElementById("root"));

})();
//# sourceMappingURL=bundle.js.map
