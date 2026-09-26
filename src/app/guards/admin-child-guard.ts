import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../services/firebase';

export const adminChildGuard: CanActivateChildFn = () => {

  const router = inject(Router);

  return new Promise((resolve) => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      unsubscribe();

      // USUARIO LOGUEADO
      if (user) {
        resolve(true);
        return;
      }

      // USUARIO NO LOGUEADO
      resolve(
        router.createUrlTree(['/login'])
      );

    });

  });
};