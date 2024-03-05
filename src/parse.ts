import htmlToDOM from 'html-dom-parser/lib/server/html-to-dom';
import domToReact from './dom-to-react';
import { HTMLReactParserOptions } from './types';

const domParserOptions = { lowerCaseAttributeNames: false } as const;
/**
 * Converts HTML string to React elements.
 *
 * @param html - HTML string.
 * @param options - Parser options.
 * @returns - React element(s), empty array, or string.
 */
export function HTMLReactParser(
  html: string,
  options?: HTMLReactParserOptions,
): ReturnType<typeof domToReact> {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!html) {
    return [];
  }

  return domToReact(
    htmlToDOM(html, (options?.htmlparser2 || domParserOptions) as any),
    options,
  );
}
