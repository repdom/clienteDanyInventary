var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Screen1Component } from './screen1.component';
var routes = [
    {
        path: '',
        component: Screen1Component
    }
];
var Screen1RoutingModule = /** @class */ (function () {
    function Screen1RoutingModule() {
    }
    Screen1RoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], Screen1RoutingModule);
    return Screen1RoutingModule;
}());
export { Screen1RoutingModule };
//# sourceMappingURL=screen1-routing.module.js.map