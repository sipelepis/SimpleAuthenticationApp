import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const landingGuard: CanActivateChildFn = (route, state) => {
  if(typeof window !== 'undefined'){
    const router = inject(Router);
    const token = sessionStorage?.getItem('token') ?? '';
    if(token){
      router.navigate(['/home']);
      return false;
    }else{
      return true;
    }
  }
  return false;
};
