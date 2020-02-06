// @flow
export const isUndefined = (obj: any): undefined => typeof obj === 'undefined';

export const isObject = (fn: any): object =>
  !isNil(fn) && typeof fn === 'object';

export const isPlainObject = (fn: any): object => {
  if (!isObject(fn)) {
    return false;
  }
  const proto = Object.getPrototypeOf(fn);
  if (proto === null) {
    return true;
  }
  const ctor =
    Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
    proto.constructor;
  return (
    typeof ctor === 'function' &&
    ctor instanceof ctor &&
    Function.prototype.toString.call(ctor) ===
      Function.prototype.toString.call(Object)
  );
};

export const validatePath = (path?: string): string =>
  path ? (path.charAt(0) !== '/' ? '/' + path : path) : '';

export const isFunction = (fn: any): boolean => typeof fn === 'function';

export const isString = (fn: any): string => typeof fn === 'string';

export const isConstructor = (fn: any): boolean => fn === 'constructor';

export const isNil = (obj: any): null | undefined =>
  isUndefined(obj) || obj === null;

export const isEmpty = (array: any): boolean => !(array && array.length > 0);

export const isSymbol = (fn: any): symbol => typeof fn === 'symbol';
