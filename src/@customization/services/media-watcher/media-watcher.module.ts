import { NgModule } from '@angular/core';
import { CustomizationMediaWatcherService } from '@customization/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        CustomizationMediaWatcherService
    ]
})
export class CustomizationMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _customizationMediaWatcherService: CustomizationMediaWatcherService)
    {
    }
}
