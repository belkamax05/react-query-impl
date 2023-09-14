import { AnyObject } from '../../types/AnyObject';

/**
 *
 * @param config config to validate
 * @param _validator config validator
 * @returns config
 * @example
const _config = validateConfigType({
    a: 1,
    b: 'hi',
    // c: false, //error, invilid type
    // d: 'hello', //error, invalid key
  }, null as Record<'a' | 'b' | 'c', number | string>);
 */
const validateConfigType = <
  TValidator extends AnyObject,
  TConfig extends Partial<TValidator> & {
    [K in keyof TConfig]: K extends keyof TValidator ? TValidator[K] : never;
  }
>(
  config: TConfig,
  _validator: TValidator
): TConfig => {
  return config;
};

export default validateConfigType;
