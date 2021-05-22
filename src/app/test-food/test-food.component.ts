import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { FoodService } from '../auth/shared/food.service';
import { ItemService } from '../auth/shared/item.service';
import { ItemPayload } from '../item-order/item-payload';
import { FoodPayload } from './food-payload';

@Component({
  selector: 'app-test-food',
  templateUrl: './test-food.component.html',
  styleUrls: ['./test-food.component.css']
})
export class TestFoodComponent implements OnInit {

  restaurantId: number;
  // foods: FoodPayload[];
  foods: Observable<Array<FoodPayload>>;
  foodsList: FoodPayload[];
  itemPayload: ItemPayload;
  items: ItemPayload[];


  constructor(private foodService: FoodService, private activateRoute: ActivatedRoute, private router: Router, private itemService: ItemService) {
    this.restaurantId = this.activateRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    // this.getFoodsForMenu();
    this.foods = this.foodService.getAllFoods();
    this.getFoodsForMenu();
  }

  private getFoodsForMenu() {
    this.foodService.getAllFoodsForRestaurant(this.restaurantId).subscribe(data => {
      this.foodsList = data;
    }, error => {
      throwError(error);
    });
  }

  addToCart(foodId: number) {
    let food = this.foodsList.find(food =>{
      return food.id === +foodId;
    });
    this.itemPayload.foodId = foodId;
    this.itemPayload.name = food.foodName;
    this.itemPayload.price = food.price;
    this.itemPayload.orderId = 1;
    this.itemService.addItem(this.itemPayload).subscribe(data => {
      this.items = data;
    }, error => {
      throwError(error);
    });

  }

}
