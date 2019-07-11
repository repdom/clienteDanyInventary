import { ArticulosService } from './../services/articulos/articulos.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent implements OnInit {
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
