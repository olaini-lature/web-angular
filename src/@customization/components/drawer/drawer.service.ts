import { Injectable } from '@angular/core';
import { CustomizationDrawerComponent } from '@customization/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class CustomizationDrawerService
{
    private _componentRegistry: Map<string, CustomizationDrawerComponent> = new Map<string, CustomizationDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: CustomizationDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): CustomizationDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
