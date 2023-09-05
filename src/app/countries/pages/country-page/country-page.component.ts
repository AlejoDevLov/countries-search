import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;
  @Output()
  public countryPath!: EventEmitter<string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
    ) {}

  ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          // tap( ({ id }) => this.countryPath.emit(id)),
          switchMap( ({ id:code }) => this.countriesService.searchByAlphaCode(code) )
        )
        .subscribe( (country) => {
          if( !country ) return this.router.navigateByUrl('');
          return this.country = country;
        })
  }
}
