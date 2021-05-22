import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { ItemService } from '../auth/shared/item.service';
import { MessengerService } from '../auth/shared/messenger.service';
import { FoodPayload } from '../test-food/food-payload';
import { ItemPayload } from './item-payload';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.css']
})
export class ItemOrderComponent implements OnInit {
  @Input() foodItem: FoodPayload;
  itemPayload: ItemPayload;
  items: ItemPayload[];


  constructor(private itemService: ItemService, private msg: MessengerService) { }

  ngOnInit(): void {
  }

  addToCart() {
    // this.itemPayload.foodId = foodId;
    // this.itemPayload.name = this.foodItem.foodName;
    // this.itemPayload.price = this.foodItem.price;
    // this.itemPayload.orderId = 1;
    // this.itemService.addItem(this.itemPayload).subscribe(data => {
    //   this.items = data;
    // }, error => {
    //   throwError(error);
    // });
    this.itemService.addItem(this.foodItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

}
