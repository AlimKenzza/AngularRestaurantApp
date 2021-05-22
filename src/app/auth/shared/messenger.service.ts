import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemPayload } from 'src/app/item-order/item-payload';
import { FoodPayload } from 'src/app/test-food/food-payload';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  
  subject = new Subject()


  constructor() { }

  sendMsg(food) {
    console.log(food);
    this.subject.next(food)
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
