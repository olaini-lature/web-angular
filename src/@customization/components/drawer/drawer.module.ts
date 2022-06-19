import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationDrawerComponent } from '@customization/components/drawer/drawer.component';

@NgModule({
    declarations: [
        CustomizationDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        CustomizationDrawerComponent
    ]
})
export class CustomizationDrawerModule
{
}
