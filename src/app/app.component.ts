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

  // pass an array to the of() function emits the entire array as a single item
  public bananaStream2 = of(['Banana 1', 'Banana 2']);

  // making the of() function behave like from() with the spread operator
  public plums = ['Plum 1', 'Plum 2'];
  public plumStream = of(...this.plums);

  constructor() {

    // subscribe to appleStream observable
    this.appleStream.subscribe((val) => console.log(val));

    // subscribe to orangeStream Observable
    this.orangeStream.subscribe((val) => console.log(val));

    // subscribe to bananaStream Observable
    this.bananaStream.subscribe((val) => console.log(val));

    // subscribe to bananaStream2 Observable
    this.bananaStream2.subscribe((val) => console.log(val));

    // subscribe to plumStream Observable
    this.plumStream.subscribe((val) => console.log(val));
  }
}

// conclusion: the from(X) and the of(...X) creation functions are equivalent