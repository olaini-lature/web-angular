import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CustomizationConfirmationModule } from '@customization/services/confirmation';
import { CustomizationMediaWatcherModule } from '@customization/services/media-watcher/media-watcher.module';
import { CustomizationSplashScreenModule } from '@customization/services/splash-screen/splash-screen.module';
import { CustomizationTailwindConfigModule } from '@customization/services/tailwind/tailwind.module';
import { CustomizationUtilsModule } from '@customization/services/utils/utils.module';

@NgModule({
    imports  : [
        CustomizationConfirmationModule,
        CustomizationMediaWatcherModule,
        CustomizationSplashScreenModule,
        CustomizationTailwindConfigModule,
        CustomizationUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class CustomizationModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: CustomizationModule)
    {
        if ( parentModule )
        {
            throw new Error('CustomizationModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
