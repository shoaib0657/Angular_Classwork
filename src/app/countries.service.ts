import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  // dependency injection
  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get('https://restcountries.com/v3.1/all');
  }
}
