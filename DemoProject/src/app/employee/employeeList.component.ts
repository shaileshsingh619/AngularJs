import { Component ,OnInit} from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreferencesService } from '../employee/userpreferences.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
    //providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading data. Please wait...';
   
    constructor(private _employeeService: EmployeeService, private _userPreferencesService: UserPreferencesService) {
        
    }

    ngOnInit() {
        this._employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData, (error) => { this.statusMessage = 'Problem with the service. Please try again later.' });
    }

    trackByCode(index: number, employee: any): string {
        return employee.code;
    }

    getAllEmployeeCount(): number {
        return this.employees.length;
    }

    getMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }
    onEmployeeRadioButtonCountChanged(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }
}