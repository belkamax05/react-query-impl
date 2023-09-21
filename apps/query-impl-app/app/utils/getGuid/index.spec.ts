import getGuid from '.';

describe('getGuid', () => {
  it('should match the expected format', () => {
    const guid = getGuid();

    expect(typeof guid).toBe('string');

    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(regex.test(guid)).toBe(true);
  });

  it('should return a different value each time it is called', () => {
    const guid1 = getGuid();
    const guid2 = getGuid();
    expect(guid1).not.toBe(guid2);
  });
});
