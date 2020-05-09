import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "../models/item";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  saveItems(list: Array<Item>) {
    this.http
      .put("https://rentall-98336.firebaseio.com/items.json", list)
      .subscribe();
  }
  // itemsList, items, itemsListObs
}
