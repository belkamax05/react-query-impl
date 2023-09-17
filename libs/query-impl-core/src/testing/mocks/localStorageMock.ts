/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * localStorage mocking
 * @usage jest.mock('@rq-impl/core/testing/mocks/localStorageMock');
 * @usage Object.defineProperty(window, 'localStorage', { value: localStorageMock });
 */
const localStorageMock = (function (): Pick<
  Storage,
  'getItem' | 'setItem' | 'clear' | 'removeItem' | 'getAll'
> {
  let store = {};
  return {
    getItem: (key: any) => {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

export default localStorageMock;
