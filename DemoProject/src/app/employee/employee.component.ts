import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
    //providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService,
        private _activedRoute: ActivatedRoute,
        private _router: Router) {

    }

    ngOnInit() {
        let empCode: string = this._activedRoute.snapshot.params['code'];
        this._employeeService.getEmployeesByCode(empCode).subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = "Employee with the specified Employee Code does not exist.";
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.statusMessage = "Please try again after sometime.";
                console.log(error)
            }
        );
    }

    onBackButtonClicked(): void {
        this._router.navigate(['/employees']);
    }
}
