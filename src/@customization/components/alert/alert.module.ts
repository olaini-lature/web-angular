import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomizationAlertComponent } from '@customization/components/alert/alert.component';

@NgModule({
    declarations: [
        CustomizationAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        CustomizationAlertComponent
    ]
})
export class CustomizationAlertModule
{
}
