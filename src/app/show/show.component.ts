import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { environment } from '../../environments/environment';
import { PeliculasService } from '../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  URL_LARAVEL = environment.URL_LARAVEL;

  pelicula: Pelicula = {
    id: 0,
    nombre: '',
    descripcion: '',
    genero: '',
    duracion: '',
    anio: 0,
    imagen: '',
  };

  id:number = 0;

  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.obtenerPelicula(this.id);
    });
  }

  ngOnInit(): void {}

  obtenerPelicula(id:number) {
    this.peliculasService.obtenerPeliculaById(id).subscribe((data:any) => {
      if(data) this.pelicula = data;
    });
  }

}
