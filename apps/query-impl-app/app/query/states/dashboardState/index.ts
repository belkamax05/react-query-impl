import { createQueryState } from '@query-impl/core';
import queryKeys from '../../config/queryKeys';

interface DashboardState {
  /**
   * time when app got started
   */
  startupTime: string;
  /**
   * time when page got loaded
   */
  initTime: string;
}

const dashboardState = createQueryState({
  queryKey: queryKeys.dashboard,
  initialData: null as DashboardState,
});

export default dashboardState;
