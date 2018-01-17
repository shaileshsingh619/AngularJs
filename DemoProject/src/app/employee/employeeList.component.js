"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var userpreferences_service_1 = require("../employee/userpreferences.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeService, _userPreferencesService) {
        this._employeeService = _employeeService;
        this._userPreferencesService = _userPreferencesService;
        this.selectedEmployeeCountRadioButton = 'All';
        this.statusMessage = 'Loading data. Please wait...';
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) { _this.statusMessage = 'Problem with the service. Please try again later.'; });
    };
    EmployeeListComponent.prototype.trackByCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getAllEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeRadioButtonCountChanged = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    Object.defineProperty(EmployeeListComponent.prototype, "colour", {
        get: function () {
            return this._userPreferencesService.colourPreference;
        },
        set: function (value) {
            this._userPreferencesService.colourPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css']
            //providers: [EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, userpreferences_service_1.UserPreferencesService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map