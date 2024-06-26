import { Routes } from '@angular/router';
import { redirectGuard } from './core/guard/redirect.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [redirectGuard],
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'error',
        loadComponent: () => import('./features/error/error.component').then(m => m.ErrorComponent)
    }
];
