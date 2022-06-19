import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
    selector: 'sign-out',
    templateUrl: './sign-out.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'signOuts'
})
export class SignOutComponent implements OnInit {

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
    }

    /**
     * Sign out
     */
    signOut(): void {
        this._authService.logout();
    }
}
