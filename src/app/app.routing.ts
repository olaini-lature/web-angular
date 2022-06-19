/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/login'
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  // LOGIN PAGE
  {
    path: '',
    canActivate: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('app/pages/login/login.module').then(
            (m) => m.LoginModule
          ),
      },
    ],
  },

  // EMPLOYEES PAGE
  {
    path: 'employees',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('app/pages/employees/list/list.module').then(
            (m) => m.ListModule
          ),
      },
      {
        path: 'add',
        loadChildren: () =>
          import('app/pages/employees/add/add.module').then(
            (m) => m.AddModule
          ),
      },
      {
        path: 'detail',
        loadChildren: () =>
          import('app/pages/employees/detail/detail.module').then(
            (m) => m.DetailModule
          ),
      },
    ],
  },
];
