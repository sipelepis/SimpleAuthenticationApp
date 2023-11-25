import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user.dashboard/user.dashboard.component';
import { EventRegistrationComponent } from './event.registration/event.registration.component';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: UserDashboardComponent,
      },
      {
        path: 'registration',
        component: EventRegistrationComponent
      }
    ],
  },
];
