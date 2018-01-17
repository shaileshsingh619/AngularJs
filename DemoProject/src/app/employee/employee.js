"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(code, name, gender, annualSalary, dateOfBirth) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualSalary = annualSalary;
        this.dateOfBirth = dateOfBirth;
    }
    Employee.prototype.ComputeMonthlySalary = function (anuualSalary) {
        return anuualSalary / 12;
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map