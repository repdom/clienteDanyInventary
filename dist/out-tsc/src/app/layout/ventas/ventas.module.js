var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatInputModule, MatMenuModule, MatListModule, MatCardModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { VentasComponent } from './ventas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticulosService } from '../services/articulos/articulos.service';
var VentasModule = /** @class */ (function () {
    function VentasModule() {
    }
    VentasModule = __decorate([
        NgModule({
            declarations: [
                VentasComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                MatToolbarModule,
                MatButtonModule,
                MatSidenavModule,
                MatIconModule,
                MatInputModule,
                MatMenuModule,
                MatListModule,
                TranslateModule,
                MatCardModule,
                MatSelectModule,
                MatAutocompleteModule,
                ReactiveFormsModule,
            ],
            providers: [
                ArticulosService
            ]
        })
    ], VentasModule);
    return VentasModule;
}());
export { VentasModule };
//# sourceMappingURL=ventas.module.js.map