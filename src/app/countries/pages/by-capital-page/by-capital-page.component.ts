import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public term: string = '';
  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {
      this.countriesByService(); 
  }

  searchByCapital( keyword:string ):void {
    this.isLoading = true;
    this.countriesService.searchCapital(keyword).subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

  countriesByService() :void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.term = this.countriesService.cacheStore.byCapital.term;
  }

}
