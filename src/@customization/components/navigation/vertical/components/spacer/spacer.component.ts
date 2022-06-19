import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CustomizationVerticalNavigationComponent } from '@customization/components/navigation/vertical/vertical.component';
import { CustomizationNavigationService } from '@customization/components/navigation/navigation.service';
import { CustomizationNavigationItem } from '@customization/components/navigation/navigation.types';

@Component({
    selector       : 'customization-vertical-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizationVerticalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item: CustomizationNavigationItem;
    @Input() name: string;

    private _customizationVerticalNavigationComponent: CustomizationVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _customizationNavigationService: CustomizationNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        this._customizationVerticalNavigationComponent = this._customizationNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._customizationVerticalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
