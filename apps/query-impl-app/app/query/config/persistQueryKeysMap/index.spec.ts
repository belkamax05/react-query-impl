import persistQueryKeysMap from '.';

describe('persistQueryKeysMap', () => {
  it('should match snapshot', () => {
    expect(persistQueryKeysMap).toMatchSnapshot();
  });
});
