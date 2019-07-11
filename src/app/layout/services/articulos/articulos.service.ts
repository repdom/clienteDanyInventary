import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Http } from '@angular/http';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService extends DataService {

  constructor(http: Http) {
    super(Config.host + '/Articulos', http);
  }
}
