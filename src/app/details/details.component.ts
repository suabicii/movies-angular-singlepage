import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { FilmsService } from '../films.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private fs: FilmsService, private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`id: ${id}`);
    this.movie = this.fs.getMovie(Number(id)); //przerobienie id ze string na number
  }

  back() {
    this.location.back();
  }

}
