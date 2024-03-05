"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReactParser = exports.htmlToDOM = exports.Text = exports.ProcessingInstruction = exports.Element = exports.Comment = void 0;
var html_to_dom_1 = __importDefault(require("html-dom-parser/lib/server/html-to-dom"));
__exportStar(require("./attributes-to-props"), exports);
__exportStar(require("./dom-to-react"), exports);
var domhandler_1 = require("domhandler");
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return domhandler_1.Comment; } });
Object.defineProperty(exports, "Element", { enumerable: true, get: function () { return domhandler_1.Element; } });
Object.defineProperty(exports, "ProcessingInstruction", { enumerable: true, get: function () { return domhandler_1.ProcessingInstruction; } });
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return domhandler_1.Text; } });
exports.htmlToDOM = html_to_dom_1.default;
var parse_1 = require("./parse");
Object.defineProperty(exports, "HTMLReactParser", { enumerable: true, get: function () { return parse_1.HTMLReactParser; } });
//# sourceMappingURL=index.js.map