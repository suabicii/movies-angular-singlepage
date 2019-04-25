import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: Movie[];

  constructor(private fs: FilmsService) { }

  ngOnInit() {
    this.movies = this.fs.allMovies();
    console.table(this.movies);
  }

}
