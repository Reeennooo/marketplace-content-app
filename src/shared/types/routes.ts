export const RoutePaths = {
  main: '/',
  dashboard: '/dashboard',
  // offer: '/offer/:id',
};

export type RoutePathsType = (typeof RoutePaths)[keyof typeof RoutePaths];