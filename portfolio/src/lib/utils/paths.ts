import { base } from '$app/paths';

/**
 * Prefixes routes with the deployment base path so links work in dev and production.
 */
export const withBase = (path: string) => `${base}${path}`;
