import { ModuleWithProviders, NgModule } from '@angular/core';
import { CustomizationConfigService } from '@customization/services/config/config.service';
import { CUSTOMIZATION_APP_CONFIG } from '@customization/services/config/config.constants';

@NgModule()
export class CustomizationConfigModule
{
    /**
     * Constructor
     */
    constructor(private _customizationConfigService: CustomizationConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<CustomizationConfigModule>
    {
        return {
            ngModule : CustomizationConfigModule,
            providers: [
                {
                    provide : CUSTOMIZATION_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
