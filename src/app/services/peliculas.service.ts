import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
}
