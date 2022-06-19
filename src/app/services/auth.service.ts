import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SnackBarService } from './snackbar.service';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    onUserChange = new BehaviorSubject<any>(null);

    constructor(
        private _storageService: StorageService,
        private _snackBarService: SnackBarService,
        private router: Router
    ) { }

    isLogggedIn(): any {
        return new Promise<any>((resolve) => {
            const authUser = this._storageService.getAuthUser();

            if (authUser) {
                this.onUserChange.next(authUser);
                resolve(authUser);
            } else {
                this.onUserChange.next(null);
                resolve(null);
            }
        });
    }

    logout(): any {
        this._storageService.clearStorage();
        this.router.navigateByUrl('/login');
        this._snackBarService.presentSnackBar('Logged Out Successfully');
    }
}
