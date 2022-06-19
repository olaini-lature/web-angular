import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { trim } from 'lodash';
import { TranslocoService } from '@ngneat/transloco';
import { EmployeeService } from 'app/services/employee.service';

@Component({
    selector: 'employee-list',
    templateUrl: './list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit, OnDestroy {
    @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;

    isLoading = false;

    searchInputControl: FormControl = new FormControl();
    offset = 0;
    limit = 20;
    orderBy = 'username';
    sort: 'asc' | 'desc' = 'asc';
    employees: any;
    total = 0;
    pageIndex = 0;

    searchTimeout: any;

    paginationEmployee: any;
    subPaginationEmployee: Subscription;

    showNotification = false;
    notificationType = '';

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _employeeService: EmployeeService,
        private _changeDetectorRef: ChangeDetectorRef
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    async ngOnInit(): Promise<any> {

        this.subPaginationEmployee = this._employeeService.paginationEmployee.subscribe(async (pagination) => {
            console.log('paginationEmployee: ', pagination);

            if (pagination) {
                this.paginationEmployee = pagination;
            } else {
                this.paginationEmployee = {
                    orderBy: 'username',
                    sort: 'asc',
                    limit: 20,
                    offset: 0,
                    pageIndex: 0
                };
            }

            this.orderBy = this.paginationEmployee.orderBy;
            this.sort = this.paginationEmployee.sort;
            this.offset = this.paginationEmployee.offset;
            this.limit = this.paginationEmployee.limit;
            this.pageIndex = this.paginationEmployee.pageIndex;

            await this.getEmployees();
        });

    }

    ngOnDestroy(): any {
        if (this.subPaginationEmployee) {
            this.subPaginationEmployee.unsubscribe();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On backdrop clicked
     */
    onBackdropClicked(data?): void {
        // Go back to the list
        this._router.navigate(['./'], { relativeTo: this._activatedRoute });

        if (data) {
            this.getEmployees();
        }
    }

    /**
     * Create employee
     *
     * @param type
     */
    createEmployee(): void {
        this._router.navigate(['./', 'new-employee'], { relativeTo: this._activatedRoute });
    }

    detailEmployee(data): any {
        this._employeeService.selectedEmployee.next(data);
        this._router.navigate(['./', 'detail-employee'], { relativeTo: this._activatedRoute });
    }

    async detectSearch(): Promise<any> {
        if (this.searchTimeout) {
            await clearTimeout(this.searchTimeout);
        }

        this.searchTimeout = await setTimeout(async () => {
            await clearTimeout(this.searchTimeout);
            await this.searchChanged();
        }, 800);
    }

    async clearSearch(): Promise<any> {
        const searchValue = trim(this.searchInputControl.value);

        if (searchValue.length > 0) {
            await this.searchInputControl.reset();
            await this.searchChanged();
        }
    }

    searchChanged(): any {
        console.log('searchChanged: ', this.searchInputControl.value);
        const pagination = {
            orderBy: 'code',
            sort: 'asc',
            limit: 20,
            offset: 0,
            pageIndex: 0
        };

        if (this.paginationEmployee) {
            pagination.offset = trim(this.searchInputControl.value).length > 0 ? 0 : this.paginationEmployee.offset;
            pagination.pageIndex = trim(this.searchInputControl.value).length > 0 ? 0 : this.paginationEmployee.pageIndex;
            pagination.orderBy = this.paginationEmployee.orderBy;
            pagination.sort = this.paginationEmployee.sort;
            pagination.limit = this.paginationEmployee.limit;
        }
        this._employeeService.paginationEmployee.next(pagination);
    }

    sortChanged(event): any {
        console.log('sortChanged event: ', event);

        this.paginationEmployee.orderBy = event.active;
        this.paginationEmployee.sort = event.direction;

        this.searchChanged();
    }

    pageChanged(event): any {
        console.log('pageChanged event: ', event);

        this.paginationEmployee.limit = event.pageSize;
        this.paginationEmployee.offset = event.pageIndex * event.pageSize;
        this.paginationEmployee.pageIndex = event.pageIndex;

        this.searchChanged();
    }

    /**
     * Get Employees
     */
    getEmployees(): any {
        this.isLoading = true;

        setTimeout(() => {
            const searchValue = trim(this.searchInputControl.value);

            this._employeeService.get(this.offset, this.limit, searchValue, this.orderBy, this.sort).then((result) => {
                console.log('getEmployees res: ', result);
                this.employees = result.data;
                this.total = result.total;
            }).catch((err) => {
                console.log('getEmployees err: ', err);
                this.employees = 'error';
            }).finally(() => {
                this.isLoading = false;
                this._changeDetectorRef.markForCheck();
            });
        }, 800);
    }

    editNotification(): any {
        this.notificationType = 'edit';
        this.showNotification = true;
    }

    deleteNotification(): any {
        this.notificationType = 'delete';
        this.showNotification = true;
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.username || index;
    }
}
