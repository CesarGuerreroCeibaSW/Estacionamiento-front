import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';

import { Tiquete } from '../modelos/tiquete'

@Injectable({
  providedIn: 'root'
})

export class EstacionamientoService {

  constructor(private http: HttpClient) { }

  
  listarTiquetes(){
    return this.http.get(environment.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  registrarTiquete(tiquete:Tiquete){
    return this.http.post(environment.apiUrl,tiquete).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  registrarSalida(placa:string){
    var tiquete = {
      "placa" : placa
    }
    return this.http.put(environment.apiUrl,tiquete).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    console.log(error);
    errorMessage = error.error.message;
    return throwError(errorMessage);
  }
}
