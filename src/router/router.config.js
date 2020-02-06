// @flow
import {split} from 'fusion-react';
import {ErrorCmp, LoadingCmp} from '../components';

export const appRouters: any = [
  {
    component: require('../layout/app.layout').default,
    isLayout: true,
    name: 'home',
    path: '/',
    showInMenu: false,
    title: 'Home',
  },
  {
    component: split({
      load: () => import(/* webpackPrefetch: true */ '../pages/dashboard.page'),
      ErrorComponent: ErrorCmp,
      LoadingComponent: LoadingCmp,
    }),
    isLayout: false,
    name: 'home',
    path: '/dashboard',
    showInMenu: false,
    title: 'Dashboard',
  },
];

export const authRouters: any = [
  {
    component: require('../layout/default.layout').default,
    isLayout: true,
    name: 'auth',
    path: '/auth',
    showInMenu: false,
    title: 'Auth',
  },
  {
    component: split({
      load: () =>
        import(/* webpackPrefetch: true */ '../pages/auth/login.page'),
      ErrorComponent: ErrorCmp,
      LoadingComponent: LoadingCmp,
    }),
    isLayout: false,
    name: 'login',
    path: '/auth/login',
    showInMenu: false,
    title: 'Log in',
  },
  {
    component: split({
      load: () =>
        import(/* webpackPrefetch: true */ '../pages/auth/signup.page'),
      ErrorComponent: ErrorCmp,
      LoadingComponent: LoadingCmp,
    }),
    isLayout: false,
    name: 'signup',
    path: '/auth/signup',
    showInMenu: false,
    title: 'Sign up',
  },
  {
    component: split({
      load: () =>
        import(/* webpackPrefetch: true */ '../pages/auth/verify-email.page'),
      ErrorComponent: ErrorCmp,
      LoadingComponent: LoadingCmp,
    }),
    isLayout: false,
    name: 'verify-email',
    path: '/auth/verify-email',
    showInMenu: false,
    title: 'Verify Email',
  },
];

export const routers = [...appRouters, ...authRouters];
