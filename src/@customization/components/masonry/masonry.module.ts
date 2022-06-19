import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationMasonryComponent } from '@customization/components/masonry/masonry.component';

@NgModule({
    declarations: [
        CustomizationMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        CustomizationMasonryComponent
    ]
})
export class CustomizationMasonryModule
{
}
