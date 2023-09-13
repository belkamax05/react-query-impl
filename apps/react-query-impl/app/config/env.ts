export const START_TIME = new Date();
export const ENV_DEV = process.env.NODE_ENV !== 'production';

/**
 * Check if the code is running on the client (browser have window object)
 */
export const IS_CLIENT = typeof window !== 'undefined';
