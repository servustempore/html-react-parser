import parse from '../lib/parse.js';

// @ts-expect-error Property 'default' exists on type
export default parse.default || parse;
