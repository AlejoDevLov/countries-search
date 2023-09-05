import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ByCapitalPageComponent, ByCountryPageComponent, ByRegionPageComponent, CountryPageComponent } from './pages';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountriesTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
  exports: [
    CountryPageComponent
  ]
})
export class CountriesModule { }
