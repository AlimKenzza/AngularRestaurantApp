import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ItemPayload } from 'src/app/item-order/item-payload';
import { FoodPayload } from 'src/app/test-food/food-payload';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private htppClient: HttpClient) {
    let existingCartItems = JSON.parse(localStorage.getItem('foods'));
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
   }
  addItem(itemPayload: ItemPayload): Observable<any> {
    return this.htppClient.post<any>('http://localhost8080:api/item/', {itemPayload});
  }
   cart = JSON.parse(localStorage.getItem('foods'));
   total = 0;
  private itemsSubject = new BehaviorSubject<FoodPayload[]>([]);
  items$ = this.itemsSubject.asObservable();
  addToCart(food: FoodPayload) {
    this.items$.pipe(
      take(1),
      map((foods) => {
        foods.push(food);
        localStorage.setItem('foods', JSON.stringify(foods));
      }),
    ).subscribe();
  }
  calculateTotal() {
    for(var i=0; i<this.cart.length; i++)
    {
      this.total +=  this.cart[i].price;
    }
    return this.total;
  }

  deleteProduct(){
    this.cart = JSON.parse(localStorage.getItem('foods'));
    console.log('cart',this.cart);


    var previousProducts = JSON.parse(localStorage.getItem('foods'));
    console.log('previousProducts', previousProducts)

    var index = this.cart.findIndex(x => x.id === previousProducts[0].id);

    console.log('index', index)
    this.cart.splice(index, 1);
    localStorage.setItem('foods',JSON.stringify(this.cart));
    console.log('previodProduct', previousProducts)
    this.total = 0;
    
  }
  
}
