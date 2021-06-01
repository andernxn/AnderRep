import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  pelicula: Pelicula = {
    id: 0,
    nombre: '',
    descripcion: '',
    genero: '',
    duracion: '',
    anio: 0,
    imagen: '',
  };

  constructor(private peliculasService: PeliculasService) {
    
   }

  crear() {
    this.peliculasService.crear(this.pelicula).subscribe((data:any) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
