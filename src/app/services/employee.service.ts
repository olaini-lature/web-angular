import { Injectable } from '@angular/core';
import * as mockGroupJSON from 'assets/json/mock-groups.json';
import * as mockEmployeeJSON from 'assets/json/mock-employee.json';
import { BehaviorSubject } from 'rxjs';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    groups: any;
    employees: any;

    selectedEmployee = new BehaviorSubject<any>(null);
    paginationEmployee = new BehaviorSubject<any>(null);

    constructor(
        private _utilityService: UtilityService
    ) { }

    initData(): void {
        this.groups = Object.values(mockGroupJSON)[Object.values(mockGroupJSON).length - 1];
        this.employees = Object.values(mockEmployeeJSON)[Object.values(mockEmployeeJSON).length - 1];
        console.log('employeeService groups: ', this.groups);
        console.log('employeeService employees: ', this.employees);
    }

    async get(offset = 0, limit = 10, search = '', orderBy = '', sort: 'asc' | 'desc'): Promise<any> {
        return new Promise<any>(async (resolve) => {

            if (search.length > 0) {
                const filteredEmployees = this.employees.filter((emp) => {
                    if (emp.username.includes(search) && emp.first_name.includes(search) && emp.last_name.includes(search)) {
                        return emp;
                    }
                });

                const sortedEmployees = this._utilityService.sort(filteredEmployees, orderBy, sort);

                const employeeChunk = sortedEmployees.slice(offset, offset + limit);
                const dataReturn = {
                    data: employeeChunk,
                    total: filteredEmployees.length
                };
                resolve(dataReturn);

            } else {
                const sortedEmployees = this._utilityService.sort(this.employees, orderBy, sort);
                const employeeChunk = sortedEmployees.slice(offset, offset + limit);
                const dataReturn = {
                    data: employeeChunk,
                    total: this.employees.length
                };
                resolve(dataReturn);
            }
        });
    }
}
