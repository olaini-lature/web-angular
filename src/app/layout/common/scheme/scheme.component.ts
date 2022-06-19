import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'app/core/user/user.service';
import { AppConfig, Scheme } from 'app/core/config/app.config';
import { CustomizationConfigService } from '@customization/services/config';

@Component({
  selector: 'scheme',
  templateUrl: './scheme.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'schemes'
})
export class SchemeComponent implements OnInit, OnDestroy {
  config: AppConfig;
  availableSchemes = ['dark', 'light', 'auto'];

  schemeIcons = {
    'dark': 'mat_solid:dark_mode',
    'light': 'mat_solid:light_mode',
    'auto': 'mat_solid:brightness_auto'
  };

  activeScheme: string;
  activeLang: string;

  private _unsubscribeAll: Subject<any> = new Subject<any>();


  /**
   * Constructor
   */
  constructor(
    private _customizationConfigService: CustomizationConfigService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._customizationConfigService.config$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config: AppConfig) => {
        // Store the config
        this.config = config;
        this.activeScheme = this.config.scheme;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Set the scheme on the config
   *
   * @param scheme
   */
   setActiveScheme(scheme: any | Scheme): void {
    this._customizationConfigService.config = { scheme };
  }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
   trackByFn(index: number, item: any): any
   {
       return item || index;
   }
}
