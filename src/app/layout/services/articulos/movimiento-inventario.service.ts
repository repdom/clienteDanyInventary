import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../config';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class MovimientoInventarioService extends DataService {

  constructor(http: Http) {
    super(Config.host + '/MovimientoInventario', http);
  }
}
