import { Route } from '@angular/router';
import { EmployeeDetailComponent } from './detail/detail.component';
import { EmployeeListComponent } from './list/list.component';
import { EmployeeComponent } from './employee.component';
import { CanDeactivateEmployeeDetails } from './employee.guards';

export const employeeRoutes: Route[] = [
    {
        path     : '',
        component: EmployeeComponent,
        children : [
            {
                path     : '',
                component: EmployeeListComponent,
                children : [
                    {
                        path         : ':id',
                        component    : EmployeeDetailComponent,
                        canDeactivate: [CanDeactivateEmployeeDetails]
                    }
                ]
            }
        ]
    }
];
