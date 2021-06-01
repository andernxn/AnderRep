import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  peliculas:any;
    constructor (private peliculasService: PeliculasService) {
    this.peliculasService.getPeliculas().subscribe(data => { this.peliculas = data});
  }

  ngOnInit(): void {
  }

}
