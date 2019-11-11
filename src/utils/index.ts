import { routers } from '../router/router.config';

class Utils {

  public static getActiveLink(history: any, path: string): boolean {
    const { location } = history;
    if (!location) { return false; }
    return location.pathname === path;
  }

  public getPageTitle = (pathname: string) => {
    // tslint:disable-next-line:no-shadowed-variable
    const route = routers.filter((route) => route.path === pathname);
    const localizedAppName = 'Marvi IO'; // L('AppName');
    if (!route || route.length === 0) {
      return localizedAppName;
    }

    // return L(route[0].title) + ' | ' + localizedAppName;
    return localizedAppName;
  };

  public getRoute = (path: string): any => {
    return routers.filter((route) => route.path === path)[0];
  };

  public getCookie(cname: string) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    // tslint:disable-next-line:no-console
    console.log(ca);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}

export default new Utils();
