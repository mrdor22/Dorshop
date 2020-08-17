import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {
subject = new Subject;
  constructor() { }
/// onclick send the product as subject and in details component subscribe to it and display data accrodianly
  sendMsg(product) {
  
this.subject.next(product) // triggering an event 
  }

  getMsg() {
return this.subject.asObservable();

  }
}
