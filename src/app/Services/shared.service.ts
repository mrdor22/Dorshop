import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private Behavior1 = new BehaviorSubject({product: "The Bag"});
  currrentData = this.Behavior1.asObservable();

  constructor() { }

  trick(data: any) {
    this.Behavior1.next(data);
  }
}
