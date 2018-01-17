"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Shailesh Singh ';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //template: ` Name <input [(ngModel)]='name' /> You entrerd : {{name}} `
            //template: '<list-employee></list-employee>'
            //template: `Youe text : <input type='text' [(ngModel)]='name' />
            //            <br />
            //            <br />
            //            <br />
            //            <simple [simpleInput]='name'></simple>
            //  
            template: "\n                    <div style=\"padding:5px\">\n                        <ul class=\"nav nav-tabs\">\n                            <li routerLinkActive=\"active\">\n                                <a routerLink=\"home\">Home</a>\n                            </li>\n                            <li routerLinkActive=\"active\">\n                                <a routerLink=\"employees\">Employees</a>\n                            </li>\n                            <li routerLinkActive=\"active\">\n                                <a routerLink=\"employees1\">Other</a>\n                            </li>\n                        </ul>\n                        <br/>\n                        <router-outlet></router-outlet>\n                    </div>\n              "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map