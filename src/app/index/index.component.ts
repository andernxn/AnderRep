import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  URL_LARAVEL = environment.URL_LARAVEL;

  peliculas: Pelicula[] = [];
  query: string = '';

  constructor(private peliculasService: PeliculasService) {
    this.buscar();
  }

  ngOnInit(): void {}

  buscar() {
    this.peliculasService.buscar(this.query).subscribe((data:any) => {
      if(data) this.peliculas = data;
    });
  }

  eliminar(id: number) {
    this.peliculasService.eliminar(id).subscribe((data:any) => {
      console.log(data);
    })
  }
}
