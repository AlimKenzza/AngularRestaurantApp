import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from '../auth/shared/food.service';
import { RestaurantService } from '../auth/shared/restaurant.service';
import { RestaurantPayload } from './restaurant-payload';

@Component({
  selector: 'app-test-restaurant',
  templateUrl: './test-restaurant.component.html',
  styleUrls: ['./test-restaurant.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TestRestaurantComponent implements OnInit {
  restaurants: Observable<Array<RestaurantPayload>>;
  constructor(private restaurantService: RestaurantService, private router: Router, foodService: FoodService) { }

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getAllRestaurants();
  }

  goToFood(id: number): void {
    this.router.navigateByUrl('/food/' + id);
  }
}
