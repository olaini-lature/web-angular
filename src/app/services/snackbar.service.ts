import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    isOpened = false;

    constructor(
        private _snackBar: MatSnackBar
    ) { }

    presentSnackBar(message, timeout = 3000): any {
        if (this.isOpened) {
            this._snackBar.dismiss();
        }

        this._snackBar.open(message, '', { duration: timeout });
    }
}
