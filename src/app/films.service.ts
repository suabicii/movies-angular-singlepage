import { Injectable } from '@angular/core';
import { Movie } from './models/movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private baseUrl: String = environment.apiURL
  private token: String = '2f769e9378362d5c7da628fb7fdb37489f13942d';
  private httpHeaders = new HttpHeaders(
    { 'Authorisation': `Token ${this.token}` }
  );

  constructor(private http: HttpClient) { }

  allMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/filmy/`, { headers: this.httpHeaders });
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/api/filmy/${id}/`);
  }
}
