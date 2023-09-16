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
      return (store as any)[key as any];
    },

    setItem(key, value) {
      (store as any)[key as any] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete  (store as any)[key as any];
    },

    getAll() {
      return store;
    },
  };
})();

export default localStorageMock;
