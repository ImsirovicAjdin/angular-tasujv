import { Component } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  // build an observable called appleStream (works, but not the norm)
  public appleStream = new Observable(appleObserver => {
    appleObserver.next('Apple 1');
    appleObserver.next('Apple 2');
    appleObserver.complete();
  })

  // build an observable the accepted way
  public orangeStream = of('Orange 1', 'Orange 2');

  // build an observable from any data structure using the from() Observable creation function
  public bananaStream = from(['Banana 1', 'Banana 2']);

  constructor() {

    // subscribe to appleStream observable
    this.appleStream.subscribe((val) => console.log(val));

    // subscribe to orangeStream Observable
    this.orangeStream.subscribe((val) => console.log(val));

    // subscribe to bananaStream Observable
    this.bananaStream.subscribe((val) => console.log(val));
  }
}