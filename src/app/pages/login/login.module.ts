import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'app/shared/shared.module';
import { loginRoutes } from './login.routing';
import { RouterModule } from '@angular/router';
import { CustomizationAlertModule } from '@customization/components/alert';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    SharedModule,
    CustomizationAlertModule
  ]
})
export class LoginModule { }
