import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {

  peliculas: any;
  query: string = '';

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.peliculasService.buscar(this.query).subscribe(data => {
      this.peliculas = data;
    });
  }
}
