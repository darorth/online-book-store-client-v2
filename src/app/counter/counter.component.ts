import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DECREMENT, INCREMENT } from '../reducers/counter';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  // counter$: Observable<any> | undefined;

  // constructor(private store: Store<any>) { }

  // ngOnInit() {
  //   this.counter$ = this.store.select<any>('counter')
  // }

  // increment() {
  //   this.store.dispatch({ type: INCREMENT });
  // }

  // decrement() {
  //   this.store.dispatch({ type: DECREMENT });
  // }

}
