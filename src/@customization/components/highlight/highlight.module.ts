import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationHighlightComponent } from '@customization/components/highlight/highlight.component';

@NgModule({
    declarations: [
        CustomizationHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        CustomizationHighlightComponent
    ]
})
export class CustomizationHighlightModule
{
}
