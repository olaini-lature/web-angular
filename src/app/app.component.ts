import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    /**
     * Constructor
     */
    constructor(
        private _employeeService: EmployeeService
    ) {
        this._employeeService.initData();
    }
}
