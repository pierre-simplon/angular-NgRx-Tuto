import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  counterReset(): Observable<number> {
    console.log('Sent to API');
    return of(1);
  }
}
