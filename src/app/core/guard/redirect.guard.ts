import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router, UrlTree } from '@angular/router';

export const redirectGuard: CanActivateFn = (_, state) => {
  const hasRedirect = state.root.queryParams['redirect'];
  const router = inject(Router);

  console.log("hasRedirect: ", hasRedirect);

  if (!hasRedirect) {
    const urlTree: UrlTree = router.createUrlTree(['/error'], {
        queryParams:
          { message: `L'URL al quale effettuare il redirect non è stato trovato oppure non è valido.` }
      }
    );

    return new RedirectCommand(urlTree, { skipLocationChange: true });
  }

  return true;
};
