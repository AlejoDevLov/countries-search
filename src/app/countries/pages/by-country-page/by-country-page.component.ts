import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public term: string = '';

  constructor( private countriesService: CountriesService ) {}

  ngOnInit(): void {
      this.countries = this.countriesService.cacheStore.byCountry.countries;
      this.term = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry( country:string ) {
    this.isLoading = true;
    this.countriesService.searchCountry(country)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }

}
