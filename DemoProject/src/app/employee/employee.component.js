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
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_employeeService, _activedRoute, _router) {
        this._employeeService = _employeeService;
        this._activedRoute = _activedRoute;
        this._router = _router;
        this.statusMessage = 'Loading data. Please wait...';
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activedRoute.snapshot.params['code'];
        this._employeeService.getEmployeesByCode(empCode).subscribe(function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage = "Employee with the specified Employee Code does not exist.";
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this.statusMessage = "Please try again after sometime.";
            console.log(error);
        });
    };
    EmployeeComponent.prototype.onBackButtonClicked = function () {
        this._router.navigate(['/employees']);
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css']
            //providers: [EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map