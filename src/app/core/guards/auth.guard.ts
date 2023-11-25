import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = (route, state) => {
  if(typeof window !== 'undefined'){
    const router = inject(Router);
    const token = sessionStorage?.getItem('token') ?? '';
    if(token){
      return true;
    }else{
      router.navigate(['/login']);
      return false;
    }
  }
  return false;
};
