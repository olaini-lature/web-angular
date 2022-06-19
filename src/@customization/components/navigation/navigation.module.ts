import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomizationScrollbarModule } from '@customization/directives/scrollbar/public-api';
import { CustomizationHorizontalNavigationBasicItemComponent } from '@customization/components/navigation/horizontal/components/basic/basic.component';
import { CustomizationHorizontalNavigationBranchItemComponent } from '@customization/components/navigation/horizontal/components/branch/branch.component';
import { CustomizationHorizontalNavigationDividerItemComponent } from '@customization/components/navigation/horizontal/components/divider/divider.component';
import { CustomizationHorizontalNavigationSpacerItemComponent } from '@customization/components/navigation/horizontal/components/spacer/spacer.component';
import { CustomizationHorizontalNavigationComponent } from '@customization/components/navigation/horizontal/horizontal.component';
import { CustomizationVerticalNavigationAsideItemComponent } from '@customization/components/navigation/vertical/components/aside/aside.component';
import { CustomizationVerticalNavigationBasicItemComponent } from '@customization/components/navigation/vertical/components/basic/basic.component';
import { CustomizationVerticalNavigationCollapsableItemComponent } from '@customization/components/navigation/vertical/components/collapsable/collapsable.component';
import { CustomizationVerticalNavigationDividerItemComponent } from '@customization/components/navigation/vertical/components/divider/divider.component';
import { CustomizationVerticalNavigationGroupItemComponent } from '@customization/components/navigation/vertical/components/group/group.component';
import { CustomizationVerticalNavigationSpacerItemComponent } from '@customization/components/navigation/vertical/components/spacer/spacer.component';
import { CustomizationVerticalNavigationComponent } from '@customization/components/navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        CustomizationHorizontalNavigationBasicItemComponent,
        CustomizationHorizontalNavigationBranchItemComponent,
        CustomizationHorizontalNavigationDividerItemComponent,
        CustomizationHorizontalNavigationSpacerItemComponent,
        CustomizationHorizontalNavigationComponent,
        CustomizationVerticalNavigationAsideItemComponent,
        CustomizationVerticalNavigationBasicItemComponent,
        CustomizationVerticalNavigationCollapsableItemComponent,
        CustomizationVerticalNavigationDividerItemComponent,
        CustomizationVerticalNavigationGroupItemComponent,
        CustomizationVerticalNavigationSpacerItemComponent,
        CustomizationVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        CustomizationScrollbarModule
    ],
    exports     : [
        CustomizationHorizontalNavigationComponent,
        CustomizationVerticalNavigationComponent
    ]
})
export class CustomizationNavigationModule
{
}
