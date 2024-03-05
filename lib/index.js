"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReactParser = exports.htmlToDOM = exports.domToReact = exports.attributesToProps = exports.Text = exports.ProcessingInstruction = exports.Element = exports.Comment = void 0;
var html_dom_parser_1 = __importDefault(require("html-dom-parser"));
exports.htmlToDOM = html_dom_parser_1.default;
var attributes_to_props_1 = __importDefault(require("./attributes-to-props"));
exports.attributesToProps = attributes_to_props_1.default;
var dom_to_react_1 = __importDefault(require("./dom-to-react"));
exports.domToReact = dom_to_react_1.default;
var parse_1 = __importDefault(require("./parse"));
exports.HTMLReactParser = parse_1.default;
var domhandler_1 = require("domhandler");
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return domhandler_1.Comment; } });
Object.defineProperty(exports, "Element", { enumerable: true, get: function () { return domhandler_1.Element; } });
Object.defineProperty(exports, "ProcessingInstruction", { enumerable: true, get: function () { return domhandler_1.ProcessingInstruction; } });
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return domhandler_1.Text; } });
//# sourceMappingURL=index.js.map