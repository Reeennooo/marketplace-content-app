export const RoutePaths = {
  main: '/',
  welcome: '/welcome',
  registration: '/registration',
  profile: '/profile',
  bonuses: '/bonuses',
  offer: '/offer/:id',
};

export type RoutePathsType = (typeof RoutePaths)[keyof typeof RoutePaths];