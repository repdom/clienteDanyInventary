var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Screen1RoutingModule } from './screen1-routing.module';
var Screen1Module = /** @class */ (function () {
    function Screen1Module() {
    }
    Screen1Module = __decorate([
        NgModule({
            declarations: [Screen1Component],
            imports: [
                CommonModule,
                Screen1RoutingModule,
                FlexLayoutModule.withConfig({ addFlexToParent: false })
            ]
        })
    ], Screen1Module);
    return Screen1Module;
}());
export { Screen1Module };
//# sourceMappingURL=screen1.module.js.map