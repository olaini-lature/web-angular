import { NgModule } from '@angular/core';
import { CustomizationUtilsService } from '@customization/services/utils/utils.service';

@NgModule({
    providers: [
        CustomizationUtilsService
    ]
})
export class CustomizationUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _customizationUtilsService: CustomizationUtilsService)
    {
    }
}
