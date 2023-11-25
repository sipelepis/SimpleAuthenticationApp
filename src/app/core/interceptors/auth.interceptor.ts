import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
    if(typeof window !== 'undefined') {
      const token = sessionStorage?.getItem('token') ?? '';
      req = req.clone({
        setHeaders:{
          Authorization: token ? `Token ${token}` : ''
        }
      })
    }
  return next(req);
};
