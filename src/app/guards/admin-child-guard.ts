import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const adminChildGuard: CanActivateChildFn = (childRoute, state) => {

  const router = inject(Router);

  const tieneAcceso = false;

  if (tieneAcceso) {
    return true;
  }

  return router.createUrlTree(['/home']);
};