import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'countriesApp';

  constructor( private activatedRoute: ActivatedRoute ){}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe( param => {
        console.log(param['id'])
      })
  }
}
