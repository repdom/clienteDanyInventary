import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ArticulosService } from '../services/articulos/articulos.service';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Articulo 1', 'Articulo 2', 'Articulo 3'];
  filteredOptions: Observable<string[]>;
  articulos: any;

  constructor(private articuloService: ArticulosService) { }

  ngOnInit() {
    this.listarArticulos();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  listarArticulos() {
    this.articuloService.getAll().subscribe(articulos => {
      console.log(articulos);
      this.articulos = articulos;
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
