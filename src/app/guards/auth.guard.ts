import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { StorageService } from 'app/services/storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private _storageService: StorageService,
        private _authService: AuthService
    ) { }

    async canActivate(): Promise<boolean> {

        const authUser = await this._authService.isLogggedIn();

        if (authUser) {
            return true;
        }

        await this._storageService.clearStorage();
        this.router.navigateByUrl('/login');
        return false;
    }

    async canActivateChild(): Promise<boolean> {

        const authUser = await this._authService.isLogggedIn();

        if (authUser) {
            return true;
        }

        await this._storageService.clearStorage();
        this.router.navigateByUrl('/login');
        return false;
    }
}
