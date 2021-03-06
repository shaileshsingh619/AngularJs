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
var EmployeeCountComponent = /** @class */ (function () {
    function EmployeeCountComponent() {
        this.SelectedRadioButtonValue = "All";
        this.CountRadioButtonSelectcionChanged = new core_1.EventEmitter();
        this.All = 0;
        this.Male = 0;
        this.Female = 0;
    }
    EmployeeCountComponent.prototype.onRadioButtonSelectionChanged = function () {
        this.CountRadioButtonSelectcionChanged.emit(this.SelectedRadioButtonValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeCountComponent.prototype, "CountRadioButtonSelectcionChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCountComponent.prototype, "All", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCountComponent.prototype, "Male", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], EmployeeCountComponent.prototype, "Female", void 0);
    EmployeeCountComponent = __decorate([
        core_1.Component({
            selector: 'employee-count',
            templateUrl: 'app/employee/employeeCount.component.html',
            styleUrls: ['app/employee/employeeCount.component.css']
        })
    ], EmployeeCountComponent);
    return EmployeeCountComponent;
}());
exports.EmployeeCountComponent = EmployeeCountComponent;
//# sourceMappingURL=employeeCount.component.js.map