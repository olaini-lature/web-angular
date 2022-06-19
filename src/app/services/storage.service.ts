import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    saveAuthUser(data): any {
        return localStorage.setItem('user', JSON.stringify(data));
    }

    getAuthUser(): any {
        return JSON.parse(localStorage.getItem('user'));
    }

    clearStorage(): any {
        return localStorage.clear();
    }


}
