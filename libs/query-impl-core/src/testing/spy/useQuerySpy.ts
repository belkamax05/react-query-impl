import * as reactQuery from '@tanstack/react-query';

const useQuerySpy = jest.spyOn(reactQuery, 'useQuery') as jest.Mock;

export default useQuerySpy;
