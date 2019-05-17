import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { FilmsService } from '../films.service';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: Movie;
  baseUrl: String = environment.apiURL

  constructor(private route: ActivatedRoute, private fs: FilmsService, private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fs.getMovie(Number(id)).subscribe(data => {
      this.movie = data;
    },
      error => console.log(error));
  }

  back() {
    this.location.back();
  }

}
