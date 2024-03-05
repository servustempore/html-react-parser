import htmlToDom from 'html-dom-parser/lib/server/html-to-dom';

export * from './attributes-to-props';
export * from './dom-to-react';

import type { HTMLReactParserOptions } from './types';

export { Comment, Element, ProcessingInstruction, Text } from 'domhandler';
export type { DOMNode } from 'html-dom-parser';

export type { HTMLReactParserOptions };
export const htmlToDOM = htmlToDom;

export { HTMLReactParser } from './parse';
