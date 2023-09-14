import persistQueryKeys from '.';

describe('persistQueryKeys', () => {
  it('should match snapshot', () => {
    expect(persistQueryKeys).toMatchSnapshot();
  });
});
