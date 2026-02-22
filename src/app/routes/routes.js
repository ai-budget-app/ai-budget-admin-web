import { lazy } from 'react';
import { PATHS } from './paths';

// Lazy loading страниц
const HomePage = lazy(() => import('@/pages/home/HomePage'));
// const NotFoundPage = lazy(() => import('@/pages/common/NotFoundPage'));

export const routes = [
  {
    path: PATHS.HOME,
    element: HomePage,
    roles: [], // Пустой массив = доступно всем
    isPublic: true,
  },
  // Будущие роуты:
  // {
  //   path: PATHS.LOGIN,
  //   element: LoginPage,
  //   roles: [USER_ROLES.GUEST],
  //   isPublic: true,
  // },
  // {
  //   path: PATHS.DASHBOARD,
  //   element: DashboardPage,
  //   roles: [USER_ROLES.USER],
  //   isPublic: false,
  // },
];
