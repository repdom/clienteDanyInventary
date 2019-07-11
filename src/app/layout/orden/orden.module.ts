import { OrdenComponent } from './orden.component';
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
  MatDatepickerModule,
  MatSelectModule,
  MatAutocompleteModule, 
  MAT_DATE_LOCALE,
  MatNativeDateModule} from '@angular/material';
  import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ArticulosService } from '../services/articulos/articulos.service';


@NgModule({
  declarations: [
    OrdenComponent
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
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    ArticulosService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ]
})
export class OrdenModule { }
