import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})

export class CountriesComponent implements OnInit {

  countries: any = [];
  displayCountries: any = [];
  searchText:string = "";

  constructor(private country:CountriesService) { }

  ngOnInit(): void {
    this.getAllCountries();
    this.displayCountries = this.countries
  }

  getAllCountries()
  {
    this.country.getAll().subscribe(success => {
      console.log("success ===>>>", success);
      this.countries = success;
      this.displayCountries = this.countries;
    }, error => {
      console.log("error ===>>>", error);
    });
  }

  searchCountryByName() {
    this.displayCountries = this.countries.filter((cc: any) =>
      cc.name.official.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  
}
