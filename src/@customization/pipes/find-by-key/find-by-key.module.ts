import { NgModule } from '@angular/core';
import { CustomizationFindByKeyPipe } from '@customization/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        CustomizationFindByKeyPipe
    ],
    exports     : [
        CustomizationFindByKeyPipe
    ]
})
export class CustomizationFindByKeyPipeModule
{
}
