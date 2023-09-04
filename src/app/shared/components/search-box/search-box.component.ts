import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = "Buscar";

  @Input()
  public value: string = '';

  @Output()
  public inputSearch: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe( value => {
        this.inputSearch.emit(value)
      })
  }

  ngOnDestroy(): void {
      // this.debouncer.unsubscribe();
      this.debouncerSubscription?.unsubscribe();
  }

  emitInputValue( inputValue:string ):void {
    this.inputSearch.emit(inputValue);
  }

  onKeyPress( value:string ): void {
    this.debouncer.next(value);
    // setTimeout( () => {
    //   console.log('desde timeout ' + value)
    // }, 800);
  }
}
