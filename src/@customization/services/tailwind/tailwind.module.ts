import { NgModule } from '@angular/core';
import { CustomizationTailwindService } from '@customization/services/tailwind/tailwind.service';

@NgModule({
    providers: [
        CustomizationTailwindService
    ]
})
export class CustomizationTailwindConfigModule
{
    /**
     * Constructor
     */
    constructor(private _customizationTailwindConfigService: CustomizationTailwindService)
    {
    }
}
