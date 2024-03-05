import HTMLReactParser from '../lib/index.js';

export * from '../lib/index.js';

// @ts-expect-error Property 'default' exists on type
HTMLReactParser = HTMLReactParser as typeof HTMLReactParser;
export { HTMLReactParser };
