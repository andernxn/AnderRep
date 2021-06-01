import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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

  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
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

  editar(pelicula: Pelicula) {
    this.peliculasService.editar(pelicula).subscribe((data:any) => {
      console.log(data);
      if(data) this.router.navigateByUrl('/');
    })
  }


}
