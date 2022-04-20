import mapArr from "./mapArr.js";
import mapObj from "./mapObj.js";
import type from "./type.js";

const cloneRegExp = pattern =>
    new RegExp(
        pattern.source,
        (pattern.global ? 'g' : '') +
            (pattern.ignoreCase ? 'i' : '') +
            (pattern.multiline ? 'm' : '') +
            (pattern.sticky ? 'y' : '') +
            (pattern.unicode ? 'u' : '')
    );

/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are not
 * copied, but assigned by their reference.
 *
 * @param {*} x The value to clone
 * @return {*} A copy of a value.
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = clone(objects);
 *      objects[0] === objectsClone[0]; //=> false
 */

export const clone = x => {
    switch (type(x)) {
        case 'Object':
            return mapObj(clone, x);
        case 'Array':
            return mapArr(clone, x);
        case 'Date':
            return new Date(x.valueOf());
        case 'RegExp':
            return cloneRegExp(x);
    }

    return x;
};

export default clone;
