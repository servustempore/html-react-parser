import htmlToDOM from 'html-dom-parser';

import attributesToProps from './attributes-to-props';
import domToReact from './dom-to-react';
import HTMLReactParser from './parse';
import type { HTMLReactParserOptions } from './types';

export { Comment, Element, ProcessingInstruction, Text } from 'domhandler';
export type { DOMNode } from 'html-dom-parser';

export type { HTMLReactParserOptions };
export { attributesToProps, domToReact, htmlToDOM, HTMLReactParser };
