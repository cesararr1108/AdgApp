import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const url_service=environment.url_service;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) { }


  login(usuario:string,clave:string){

    let body=new FormData();

    body.append('usuario',usuario);
    body.append('clave',clave);

    return this.http.post(`${url_service}usuarios/login`,body);

  }


}
