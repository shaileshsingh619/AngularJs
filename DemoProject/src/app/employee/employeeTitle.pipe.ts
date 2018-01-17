import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {
    transform(name: string, gender: string): string {
        if (gender.toLowerCase().trim() == "male") {
            return "Mr. " + name;
        } else {
            return "Miss. " + name;
        }
    }
}