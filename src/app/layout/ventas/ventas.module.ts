import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatCardModule,
        MatSelectModule,
        MatAutocompleteModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { VentasComponent } from './ventas.component';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ArticulosService } from '../services/articulos/articulos.service';
import { MovimientoInventarioService } from '../services/articulos/movimiento-inventario.service';

@NgModule({
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
    ArticulosService,
    MovimientoInventarioService
  ]
})
export class VentasModule { }
