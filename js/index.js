"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var react_dom_1 = __importDefault(require("react-dom"));

var HelloWorld_1 = __importDefault(require("./HelloWorld"));

react_dom_1["default"].render( /*#__PURE__*/React.createElement(HelloWorld_1["default"], null), document.getElementById("root"));