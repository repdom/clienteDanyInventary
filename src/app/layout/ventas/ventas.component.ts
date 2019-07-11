import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ArticulosService } from '../services/articulos/articulos.service';
import { MovimientoInventarioService } from '../services/articulos/movimiento-inventario.service';

export class Almacen {
  codigoAlmacen = '';
  balanceActual = 0;
}

export class Articulo {
  almacen?: Almacen[] = [];
  codigoArticulo = '';
  descripcion = '';
  id = '';
  unidadCompra = '';
}

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Articulo 1', 'Articulo 2', 'Articulo 3'];
  filteredOptions: Observable<string[]>;
  articulos: Articulo[] = [];
  articuloSeleccionado: Articulo = new Articulo();
  articuloVenta: Articulo = new Articulo();
  precio = 0;
  almacenVenta: Almacen;
  ventaEnAlmacen: Almacen = new Almacen();
  movimeintos: any;
  constructor(private articuloService: ArticulosService,
              private movimientoInventarioService: MovimientoInventarioService) { }

  ngOnInit() {
    this.listarArticulos();
    this.listarVentas();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    // console.log(this.filteredOptions);
  }

  listarArticulos() {
    this.articuloService.getAll().subscribe(articulos => {
      console.log(articulos);
      // this.articulos = articulos;
      this.articulos = articulos;
    });
  }

  listarVentas() {
    this.movimientoInventarioService.getAll().subscribe(movimeintoInventario => {
      this.movimeintos = movimeintoInventario;
    }, () => {

    }, () => {
      console.log(this.movimeintos);
    });
  }

  agregarVenta() {
      // id: ObjectId("5d26d6dc4976f2a05fc22a33"),
      const resourse = {
        codigoMovimiento: this.movimeintos.length + 1,
        codigoAlmacen: this.almacenVenta.codigoAlmacen,
        tipoMovimiento: 'SALIDA',
        codigoArticulo: this.articuloSeleccionado.codigoArticulo,
        cantidad : this.ventaEnAlmacen.balanceActual,
        unidad: this.articuloSeleccionado.unidadCompra
      };

      this.movimientoInventarioService.create(resourse).subscribe(r => {
        console.log(r);
      }, (error) => {

      }, () => {
        // this.articuloSeleccionado = new Articulo();
        this.ventaEnAlmacen.balanceActual = 0;
        this.almacenVenta = null;
        // this.articuloService.update()
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
