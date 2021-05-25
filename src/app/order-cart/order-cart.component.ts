import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../auth/shared/messenger.service';
import { ItemPayload } from '../item-order/item-payload';
import { FoodPayload } from '../test-food/food-payload';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0;
  constructor(private msg: MessengerService) { }

  ngOnInit() {
  //   this.msg.getMsg().subscribe((food: FoodPayload) => {
  //     this.cartItems.push({
  //       foodName: food.foodName,
  //       qty: 1,
  //       price: food.price
  //     })
  //   })
  }

}
