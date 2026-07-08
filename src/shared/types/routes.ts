export const RoutePaths = {
  main: '/',
  dashboard: '/dashboard',
  userManagement: '/dashboard/user-management',
  kidsManagement: '/dashboard/kids',
  products: '/dashboard/products',
  // offer: '/offer/:id',
};

export type RoutePathsType = (typeof RoutePaths)[keyof typeof RoutePaths];