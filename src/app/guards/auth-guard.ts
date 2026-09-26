import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../services/firebase';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  return new Promise((resolve) => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      unsubscribe();

      if (user) {
        resolve(true);
        return;
      }

      resolve(
        router.createUrlTree(['/login'])
      );

    });

  });
};