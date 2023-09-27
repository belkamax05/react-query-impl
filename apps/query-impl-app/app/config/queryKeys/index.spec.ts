import queryKeys from '.';

describe('queryKeys', () => {
  it('should match snapshot', () => {
    expect(queryKeys).toMatchSnapshot();
  });
});
