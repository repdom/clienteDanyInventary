var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ArticulosService } from '../services/articulos/articulos.service';
var VentasComponent = /** @class */ (function () {
    function VentasComponent(articuloService) {
        this.articuloService = articuloService;
        this.myControl = new FormControl();
        this.options = ['Articulo 1', 'Articulo 2', 'Articulo 3'];
    }
    VentasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listarArticulos();
        this.filteredOptions = this.myControl.valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filter(value); }));
    };
    VentasComponent.prototype.listarArticulos = function () {
        var _this = this;
        this.articuloService.getAll().subscribe(function (articulos) {
            console.log(articulos);
            _this.articulos = articulos;
        });
    };
    VentasComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    VentasComponent = __decorate([
        Component({
            selector: 'app-ventas',
            templateUrl: './ventas.component.html',
            styleUrls: ['./ventas.component.scss']
        }),
        __metadata("design:paramtypes", [ArticulosService])
    ], VentasComponent);
    return VentasComponent;
}());
export { VentasComponent };
//# sourceMappingURL=ventas.component.js.map