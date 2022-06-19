import { NgModule } from '@angular/core';
import { CustomizationScrollbarDirective } from '@customization/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        CustomizationScrollbarDirective
    ],
    exports     : [
        CustomizationScrollbarDirective
    ]
})
export class CustomizationScrollbarModule
{
}
