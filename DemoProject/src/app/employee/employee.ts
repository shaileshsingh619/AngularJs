export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;

    //ComputeMonthlySalary(anuualSalary: number): number;
}

export class Employee implements IEmployee {

    constructor(public code: string, public name: string, public gender: string, public annualSalary: number, public dateOfBirth: string) { }

    ComputeMonthlySalary(anuualSalary: number): number {
        return anuualSalary / 12;
    }
}