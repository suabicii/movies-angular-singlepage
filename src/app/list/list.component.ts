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
  message: String = '';

  constructor(private fs: FilmsService) { }

  ngOnInit() {
    this.fs.allMovies().subscribe(data => {
      this.movies = data;
    },
      error => {
        this.message = 'Wystąpił błąd, spróbuj później'
        console.log(error)
      });
    console.table(this.movies);
  }

}
