import { authGuard } from './core/guards/auth.guard';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { landingGuard } from './core/guards/landing.guard';

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [landingGuard],
    loadChildren: () => import('./landing/landing.routes').then(m => m.routes),
  },
  {
    path: 'home',
    canActivateChild: [authGuard],
    loadChildren: () => import('./user/user.routing').then(m => m.routes),
  },
  {
    path:'**',
    component: NotFoundComponent
  },
];
