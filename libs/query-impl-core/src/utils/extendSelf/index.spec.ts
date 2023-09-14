import extendSelf from '.';

describe('extendSelf', () => {
  const mockObject = { foo: 'bar' };
  const mockExtension = (self: typeof mockObject) => ({ baz: 'qux' });

  it('should extend the object with the extension function', () => {
    const result = extendSelf(mockObject, mockExtension);

    expect(result).toEqual({ foo: 'bar', baz: 'qux' });
  });
});
