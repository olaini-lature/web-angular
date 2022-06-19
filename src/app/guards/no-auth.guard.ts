import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { StorageService } from 'app/services/storage.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private _storageService: StorageService,
        private _authService: AuthService
    ) { }

    async canActivate(): Promise<boolean> {

        const authUser = await this._authService.isLogggedIn();

        if (!authUser) {
            await this._storageService.clearStorage();
            return true;
        }

        this.router.navigateByUrl('/employee');
        return false;
    }

    async canActivateChild(): Promise<boolean> {

        const authUser = await this._authService.isLogggedIn();

        if (!authUser) {
            await this._storageService.clearStorage();
            return true;
        }

        this.router.navigateByUrl('/employee');
        return false;
    }

}
