import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemPayload } from 'src/app/item-order/item-payload';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private htppClient: HttpClient) { }
  addItem(itemPayload: ItemPayload): Observable<any> {
    return this.htppClient.post<any>('http://localhost8080:api/item/', {itemPayload});
  }
  
}
