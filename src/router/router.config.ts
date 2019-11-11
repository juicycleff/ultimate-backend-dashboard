export const publicRouters: any = [
  {
    component: require('../layout/default.layout').default,
    isLayout: true,
    name: 'home',
    path: '/',
    showInMenu: false,
    title: 'Home',
  },
  {
    component: require('../pages/auth/login.page').default,
    isLayout: false,
    name: 'login',
    path: '/login',
    showInMenu: false,
    title: 'LogIn',
  },
  {
    component: require('../pages/auth/signup.page').default,
    isLayout: false,
    name: 'signup',
    path: '/signup',
    showInMenu: false,
    title: 'SignUp',
  },
];

export const appRouters: any = [
  {
    component: require('../layout/app.layout').default,
    isLayout: true,
    name: 'app',
    path: '/app',
    showInMenu: false,
    title: 'App',
  },
  {
    component: require('../pages/dashboard.page').default,
    isLayout: false,
    name: 'dashboard',
    path: '/app/dashboard',
    showInMenu: false,
    title: 'Dashboard',
  },
];

export const routers = [...publicRouters, ...appRouters];
