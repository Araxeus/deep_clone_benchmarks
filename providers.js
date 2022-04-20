export { clone as tily } from './mocks/tily.js';
export { clone as ramda } from 'ramda';
export { default as rfdc } from 'rfdc/default';
export { default as nanoclone } from 'nanoclone';
export { default as clone } from 'clone';
export { copy as copy_anything } from 'copy-anything';
export { default as just_clone } from 'just-clone';
export { default as deep_copy } from 'deep-copy';
export { default as lodash_cloneDeep } from 'lodash.clonedeep';
export { default as clone_deep } from 'clone-deep';
export { default as fast_copy } from 'fast-copy';
export { copy as fastest_json_Copy } from 'fastest-json-copy';
export { default as nanoCopy } from 'nano-copy';

export { klona as klona_json } from 'klona/json';
export { klona as klona_light } from 'klona/lite';
export { klona } from 'klona';
export { klona as klona_full } from 'klona/full';

//slow and throw when trying to clone class instead of just putting it in the object
import structuredClonePolyfill from '@ungap/structured-clone'; // polyfill used when node < 17.0.0
export const structuredClone = global.structuredClone || structuredClonePolyfill;
