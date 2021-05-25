import { Component, OnInit } from '@angular/core';
import { ItemService } from '../auth/shared/item.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
 


  constructor(private itemService: ItemService) { }

  items$ = this.itemService.items$;
  total = this.itemService.calculateTotal();

  deleteFood() {
    this.itemService.deleteProduct();
  }


}
