import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeDetailComponent } from './detail/detail.component';

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateEmployeeDetails implements CanDeactivate<EmployeeDetailComponent>
{
    canDeactivate(
        component: EmployeeDetailComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        // Get the next route
        let nextRoute: ActivatedRouteSnapshot = nextState.root;
        while ( nextRoute.firstChild )
        {
            nextRoute = nextRoute.firstChild;
        }

        // If the next state doesn't contain '/employee'
        // it means we are navigating away from the
        // employee app
        if ( !nextState.url.includes('/employee') )
        {
            // Let it navigate
            return true;
        }

        // If we are navigating to another position...
        if ( nextRoute.paramMap.get('id') )
        {
            // Just navigate
            return true;
        }
        // Otherwise...
        else
        {
            // Close the drawer first, and then navigate
            return component.closeDrawer().then(() => true);
        }
    }
}
