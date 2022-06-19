import { NgModule } from '@angular/core';
import { CustomizationSplashScreenService } from '@customization/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        CustomizationSplashScreenService
    ]
})
export class CustomizationSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _customizationSplashScreenService: CustomizationSplashScreenService)
    {
    }
}
