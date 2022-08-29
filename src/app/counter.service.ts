import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CounterResponse } from './counter.model';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  counterReset(): Observable<CounterResponse> {
    console.log('Sent to API');
    return of({ type: 'success' });
  }
}
