"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReactParser = void 0;
var html_to_dom_1 = __importDefault(require("html-dom-parser/lib/server/html-to-dom"));
var dom_to_react_1 = require("./dom-to-react");
var domParserOptions = { lowerCaseAttributeNames: false };
/**
 * Converts HTML string to React elements.
 *
 * @param html - HTML string.
 * @param options - Parser options.
 * @returns - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!html) {
        return [];
    }
    return (0, dom_to_react_1.domToReact)((0, html_to_dom_1.default)(html, ((options === null || options === void 0 ? void 0 : options.htmlparser2) || domParserOptions)), options);
}
exports.HTMLReactParser = HTMLReactParser;
//# sourceMappingURL=parse.js.map