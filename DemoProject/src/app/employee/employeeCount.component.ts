import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})
export class EmployeeCountComponent {

    SelectedRadioButtonValue: string = "All";

    @Output()
    CountRadioButtonSelectcionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    All: number = 0;

    @Input()
    Male: number = 0;

    @Input()
    Female: number = 0;

    onRadioButtonSelectionChanged() {
        this.CountRadioButtonSelectcionChanged.emit(this.SelectedRadioButtonValue);
    }
}