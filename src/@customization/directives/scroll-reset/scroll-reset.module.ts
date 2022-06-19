import { NgModule } from '@angular/core';
import { CustomizationScrollResetDirective } from '@customization/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        CustomizationScrollResetDirective
    ],
    exports     : [
        CustomizationScrollResetDirective
    ]
})
export class CustomizationScrollResetModule
{
}
