// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DeepRecord<K extends keyof any, T> = {
  [P in K]: T | DeepRecord<P, T>;
};
