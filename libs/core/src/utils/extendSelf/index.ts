import { AnyObject } from '@rq-impl/core/types/AnyObject';

/**
 * extends object with functionality, based on the object itself
 * @param self object to extend
 * @param extend extension function, which receives the object itself
 * @returns extended object
 */
const extendSelf = <
  TSelf extends AnyObject,
  TExtend extends (self: TSelf) => AnyObject
>(
  self: TSelf,
  extend: TExtend
) => {
  return {
    ...self,
    ...(extend(self) as ReturnType<TExtend>),
  };
};

export default extendSelf;
