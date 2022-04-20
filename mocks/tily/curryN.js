import arity from './arity.js';

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. If `g` is `curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 *      var sumArgs = (...args) => sum(args);
 *
 *      var curriedAddFourNumbers = curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
 export const curryN = ((length, fn) => {
    function curried(...args) {
      if (args.length >= length) {
        return fn.apply(this, args);
      }
  
      return arity(length - args.length, function (...newArgs) {
        return curried.apply(this, args.concat(newArgs));
      });
    }
  
    return arity(length, curried);
  });
  
  export default curryN;
