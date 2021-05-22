import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantPayload } from 'src/app/test-restaurant/restaurant-payload';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  getAllRestaurants(): Observable<Array<RestaurantPayload>>{
    return this.httpClient.get<Array<RestaurantPayload>>("http://localhost:8080/api/restaurant");
  }
}
