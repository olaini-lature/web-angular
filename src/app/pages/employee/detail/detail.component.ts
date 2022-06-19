import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatDrawerToggleResult } from '@angular/material/sidenav';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    FormArray,
} from '@angular/forms';
import { StorageService } from 'app/services/storage.service';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { EmployeeListComponent } from '../list/list.component';
import { MatDialog } from '@angular/material/dialog';
import { trim } from 'lodash';
import { EmployeeService } from 'app/services/employee.service';
import { UtilityService } from 'app/services/utility.service';
import moment from 'moment';

@Component({
    selector: 'employee-details',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {

    employeeForm: FormGroup;
    employeeUsername: FormControl;
    employeeFirstName: FormControl;
    employeeLastName: FormControl;
    employeeEmail: FormControl;
    employeeBirthDate: FormControl;
    employeeBasicSalary: FormControl;
    employeeStatus: FormControl;
    employeeGroup: FormControl;
    employeeDescription: FormControl;

    selectedEmployee: any;
    subSelectedEmployee: Subscription;

    groups: any;

    mode: 'add' | 'view';

    employees: any;
    maxDate = moment();

    /**
     * Constructor
     */
    constructor(
        private _employeeListComponent: EmployeeListComponent,
        private _employeeService: EmployeeService,
        private _storageService: StorageService,
        private _translocoService: TranslocoService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _utilityService: UtilityService,
        private dialog: MatDialog,
        private formBuilder: FormBuilder
    ) {
        this.groups = this._employeeService.groups;
        this.subSelectedEmployee = this._employeeService.selectedEmployee.subscribe(
            (selected) => {
                console.log('subSelectedEmployee: ', selected);
                this.selectedEmployee = selected;

                if (this.selectedEmployee) {
                    this.mode = 'view';
                } else {
                    this.mode = 'add';
                }
            }
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): any {

        this.employeeUsername = new FormControl(this.selectedEmployee && this.selectedEmployee.username ? this.selectedEmployee.username : '', [Validators.required]);
        this.employeeFirstName = new FormControl(this.selectedEmployee && this.selectedEmployee.first_name ? this.selectedEmployee.first_name : '', [Validators.required]);
        this.employeeLastName = new FormControl(this.selectedEmployee && this.selectedEmployee.last_name ? this.selectedEmployee.last_name : '', [Validators.required]);
        this.employeeEmail = new FormControl(this.selectedEmployee && this.selectedEmployee.email ? this.selectedEmployee.email : '', [Validators.required, Validators.email]);
        this.employeeBirthDate = new FormControl(this.selectedEmployee && this.selectedEmployee.birth_date ? this.selectedEmployee.birth_date : '', [Validators.required]);
        this.employeeBasicSalary = new FormControl(this.selectedEmployee && this.selectedEmployee.basic_salary ? this.selectedEmployee.basic_salary : '', [Validators.required]);
        this.employeeStatus = new FormControl(this.selectedEmployee && this.selectedEmployee.status ? this.selectedEmployee.status : '', [Validators.required]);
        this.employeeGroup = new FormControl(this.selectedEmployee && this.selectedEmployee.group ? this.selectedEmployee.group : '', [Validators.required]);
        this.employeeDescription = new FormControl(this.selectedEmployee && this.selectedEmployee.description ? this.selectedEmployee.description : '', [Validators.required]);

        this.employeeForm = this.formBuilder.group({
            employeeUsername: this.employeeUsername,
            employeeFirstName: this.employeeFirstName,
            employeeLastName: this.employeeLastName,
            employeeEmail: this.employeeEmail,
            employeeBirthDate: this.employeeBirthDate,
            employeeBasicSalary: this.employeeBasicSalary,
            employeeStatus: this.employeeStatus,
            employeeGroup: this.employeeGroup,
            employeeDescription: this.employeeDescription
        });

        // Open the drawer
        this._employeeListComponent.matDrawer.open();
    }

    ngOnDestroy(): void {
        if (this.subSelectedEmployee) {
            this.subSelectedEmployee.unsubscribe();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Close the drawer
     */
    closeDrawer(): Promise<MatDrawerToggleResult> {
        return this._employeeListComponent.matDrawer.close();
    }

    back(data?): void {
        this._employeeListComponent.onBackdropClicked(data);
    }

    preventEnter(event): any {
        this._utilityService.preventEnter(event);
    }

    onlyNumber(event): any {
        this._utilityService.onlyNumber(event);
    }

    preventSpace(event): any {
        this._utilityService.preventSpace(event);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
