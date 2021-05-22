import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { FoodPayload } from 'src/app/test-food/food-payload';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getAllFoodsForRestaurant(restaurantId: number): Observable<Array<FoodPayload>> {
    return this.httpClient.get<Array<FoodPayload>>('http://localhost:8080/api/food/by-menu/' + restaurantId);
  }
  getAllFoods(): Observable<Array<FoodPayload>>{
    return this.httpClient.get<Array<FoodPayload>>("http://localhost:8080/api/food");
  }
  getFoodById(id: number):Observable<FoodPayload> {
    return this.httpClient.get<FoodPayload>('http://localhost:8080/api/food/' + id);
  }
}
