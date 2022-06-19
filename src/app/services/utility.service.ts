import { Injectable } from '@angular/core';
import { trim } from 'lodash';

@Injectable({
    providedIn: 'root',
})
export class UtilityService {
    constructor() { }

    onlyNumber(event): any {
        return new Promise<any>((resolve) => {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode >= 48 && charCode <= 57) {
                // number
                resolve(true);
                return;
            } else if (charCode >= 37 && charCode <= 40) {
                // arrow
                resolve(true);
                return;
            } else if (charCode === 8 || charCode === 46) {
                resolve(true);
                return;
            } else {
                event.preventDefault();
                resolve(false);
            }
        });
    }

    preventSpace(event): any {
        return new Promise<any>((resolve) => {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode !== 32) { // space
                // number
                resolve(true);
                return;
            } else {
                event.preventDefault();
                resolve(false);
            }
        });
    }

    preventEnter(event): any {
        return new Promise<any>((resolve) => {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode !== 13) { // enter
                resolve(true);
                return;
            } else {
                event.preventDefault();
                resolve(false);
            }
        });
    }

    removeZeroLeading(event): any {
        return new Promise<any>((resolve) => {

            if (event.target.value.length > 0) {
                this.removeSurroundingSpace(event).then((resEvent) => {
                    resEvent.target.value = parseInt(resEvent.target.value, 10);
                    resolve(resEvent);
                });
            } else {
                resolve(event);
            }

        });
    }

    removeSurroundingSpace(event): any {
        return new Promise<any>((resolve) => {
            event.target.value = trim(event.target.value);
            resolve(event);
        });
    }

    sort(array = Array(), param, order: 'asc' | 'desc'): any {
        if (order === 'asc') {
            return array.sort(this.compareValues(param));
        } else {
            return array.sort(this.compareValues(param, 'desc'));
        }
    }

    private compareValues(key, order = 'asc') {
        return (a, b): any => {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }
}
