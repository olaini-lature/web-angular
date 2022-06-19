import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationCardComponent } from '@customization/components/card/card.component';

@NgModule({
    declarations: [
        CustomizationCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        CustomizationCardComponent
    ]
})
export class CustomizationCardModule
{
}
