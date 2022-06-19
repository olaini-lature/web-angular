import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CustomizationConfirmationService } from '@customization/services/confirmation/confirmation.service';
import { CustomizationConfirmationDialogComponent } from '@customization/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CustomizationConfirmationDialogComponent
    ],
    imports: [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        CustomizationConfirmationService
    ]
})
export class CustomizationConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _customizationConfirmationService: CustomizationConfirmationService)
    {
    }
}
