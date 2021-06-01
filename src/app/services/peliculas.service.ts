import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient) {}

  buscar(query: string) {
    return this.http.get('http://127.0.0.1:8000/api/buscarPelicula', {params: {nombre: query}});
  }
}
