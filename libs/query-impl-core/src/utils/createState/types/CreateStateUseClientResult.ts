export interface CreateStateUseClientResult<TData> {
  getData: () => TData;
  setData: (data: TData) => TData;
  reset: () => TData;
  useData: () => TData;
}
