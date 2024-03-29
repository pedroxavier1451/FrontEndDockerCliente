import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  save(cliente: Cliente){
    console.log("Post");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>("http://34.170.190.65:8080/microservicios-rs/api/cliente/newuser", JSON.stringify(cliente), { headers })
  }

  getAll(){
    return this.http.get<any>("http://34.170.190.65:8080/microservicios-rs/api/cliente/all");
  }
}
