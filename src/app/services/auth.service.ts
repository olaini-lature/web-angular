import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    onTokenChange = new BehaviorSubject<any>('');
    onUserChange = new BehaviorSubject<any>('');
    verificationChange = new BehaviorSubject<any>(null);

    constructor(
        private _storageService: StorageService,
        private router: Router
    ) { }

    isLogggedIn(): any {
        return new Promise<any>((resolve) => {
            const authUser = this._storageService.getAuthUser();

            if (authUser) {
                resolve(authUser);
            } else {
                resolve(null);
            }
        });
    }

    logout(): any {
        this._storageService.clearStorage();
        this.router.navigateByUrl('/login');
    }
}
