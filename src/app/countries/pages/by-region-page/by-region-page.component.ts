import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country, Region } from '../../interfaces';


// type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
// type Region = ['Africa' , 'Americas' , 'Asia' , 'Europe' , 'Oceania'];


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  public currentRegion: string = '';

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.currentRegion = this.countriesService.cacheStore.byRegion.term;
  }

  searchByRegion( region:Region ) {
    this.currentRegion = region;
    this.isLoading = true;
    this.countriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }

}
