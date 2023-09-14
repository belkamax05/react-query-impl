import validateConfigType from '.';

describe('validateConfigType', () => {
  it('should return object as is, with valid type provided', () => {
    const input = { test: 'test' };
    const result = validateConfigType(input, null as Record<string, string>);
    expect(result).toEqual({
      test: 'test',
    });
  });
});
