import queryClientConfig from '.';

describe('queryClientConfig', () => {
  it('should import queryClientConfig', () => {
    expect(queryClientConfig).toMatchInlineSnapshot(`
      {
        "defaultOptions": {
          "queries": {
            "cacheTime": Infinity,
            "refetchOnWindowFocus": false,
            "retry": false,
            "staleTime": Infinity,
          },
        },
      }
    `);
  });
});
