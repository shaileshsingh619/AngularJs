import { Component } from '@angular/core';
import { UserPreferencesService } from '../employee/userpreferences.service';

@Component({
    template: `<h1>This is the home page</h1>
                <div> Color Preferences : <input type='text' [(ngModel)]='colour' [style.background]='colour' /></div>
                `
})
export class HomeComponent {
    
    constructor(private _userPreferencesService: UserPreferencesService) {
     
    }

    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }
}