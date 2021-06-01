import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  URL_LARAVEL = environment.URL_LARAVEL;

  constructor( private http: HttpClient) {}

  buscar(query: string) {
    return this.http.get(`${this.URL_LARAVEL}/api/buscarPelicula`, {params: {nombre: query}});
  }

  obtenerPeliculaById(id: number) {
    return this.http.get(`${this.URL_LARAVEL}/api/obtenerPeliculaById/${id}`);
  }

  crear(pelicula: Pelicula) {
    const headers = new HttpHeaders({'Content-Type': 'aplication/json'});
    return this.http.post(`${this.URL_LARAVEL}/api/crearPelicula`, pelicula, {headers: headers});
  }
}
