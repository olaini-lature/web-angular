import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './list/list.component';
import { EmployeeDetailComponent } from './detail/detail.component';
import { employeeRoutes } from './employee.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';
import { CustomizationAlertModule } from '@customization/components/alert';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes),
    MaterialModule,
    ReactiveFormsModule,
    TranslocoModule,
    SharedModule,
    CustomizationAlertModule
  ],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'DD-MM-YYYY',
        },
        display: {
          dateInput: 'DD MMMM YYYY',
          monthYearLabel: 'MMMM YYYY',
          dateA11yLabel: 'MMMM YYYY',
          monthYearA11yLabel: 'MMMM YYYY',
        }
      }
    },
  ],
})
export class EmployeeModule { }
