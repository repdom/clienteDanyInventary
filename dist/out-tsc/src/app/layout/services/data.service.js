var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadInput } from './../../comunes/bad-input';
import { AppError } from './../../comunes/app-error';
import { NotFoundError } from './../../comunes/not-found-error';
// import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import { CookieService } from '../../../node_modules/ngx-cookie-service';
var DataService = /** @class */ (function () {
    // 'Authorization', `${this.cookieService.get('access_token')}`
    function DataService(url, http) {
        this.url = url;
        this.http = http;
        // this.cookieService = new CookieService(this);
        // const t = this.cookieService;
        // console.log(this.cookieService);
    }
    DataService.prototype.getAll = function () {
        // tslint:disable-next-line:max-line-length
        var headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(this.url, options)
            .pipe(map(function (response) { return response.json(); }), catchError(this.handlerError));
    };
    DataService.prototype.getFromCode = function (codigo) {
        var headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + '/' + codigo, options)
            .pipe(map(function (response) { return response.json(); }), catchError(this.handlerError));
    };
    DataService.prototype.create = function (resourse) {
        console.log(resourse);
        var headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        // tslint:disable-next-line:max-line-length
        return this.http.post(this.url, JSON.stringify(resourse), options)
            .pipe(map(function (response) { return response.json(); }), catchError(this.handlerError));
    };
    DataService.prototype.update = function (resourse) {
        var headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        console.log(resourse);
        return this.http.patch(this.url + '/' + resourse.codigo, JSON.stringify(resourse), options)
            .pipe(map(function (response) { return response.json(); }), catchError(this.handlerError));
    };
    DataService.prototype.count = function () {
        var headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + '/' + 'count', options)
            .pipe(map(function (response) { return response.json(); }), catchError(this.handlerError));
    };
    DataService.prototype.publicdelete = function (item) {
        var headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.delete(this.url + '/' + item.codigo, options)
            .pipe(map(function (response) { return response.json(); }), catchError(this.handlerError));
    };
    DataService.prototype.getRelation = function (codigo, urlAgregada) {
        var headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + '/' + codigo + '/' + urlAgregada, options)
            .pipe(map(function (response) { return response.json(); }), catchError(this.handlerError));
    };
    DataService.prototype.getAllWhere = function (codigo, campo) {
        var headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + ("?filter={%22where%22:{%22" + campo + "%22:" + codigo + "}}"), options)
            .pipe(map(function (response) { return response.json(); }), catchError(this.handlerError));
    };
    DataService.prototype.handlerError = function (error) {
        if (error.status === 400) {
            return Observable.throw(new BadInput(error.json()));
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        }
        return Observable.throw(new AppError(error));
    };
    DataService.prototype.URL = function () {
        return this.url;
    };
    DataService.prototype.HTTP = function () {
        return this.http;
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [String, Http])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map