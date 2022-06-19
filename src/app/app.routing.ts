/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from './app.resolvers';
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
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {
                path: 'employee',
                loadChildren: () =>
                    import('app/pages/employee/employee.module').then(
                        (m) => m.EmployeeModule
                    ),
            }
        ],
    },
];
