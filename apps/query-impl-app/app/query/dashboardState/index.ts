import { createState } from '@query-impl/core';
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

const dashboardState = createState({
  queryKey: queryKeys.app.dashboard,
  initialData: null as DashboardState,
});

export default dashboardState;
