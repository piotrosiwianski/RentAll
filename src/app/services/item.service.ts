import { Item } from "./../models/item";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpService } from "./http.service";

@Injectable()
export class ItemsService {
  private itemsList: Array<Item> = [];
  private itemsRented: Array<Item> = [];

  private itemsListObs = new BehaviorSubject<Array<Item>>(this.itemsList);
  private itemsRentedObs = new BehaviorSubject<Array<Item>>(this.itemsRented);

  constructor(private httpService: HttpService) {
    this.itemsList = [
      { name: "Wiertarka" },
      { name: "Drabina" },
      { name: "Kosiarka" },
      { name: "Rower" },
    ];
    this.itemsListObs.next(this.itemsList);
  }

  add(item: Item) {
    this.itemsList.push(item);
    this.itemsListObs.next(this.itemsList);
    console.log(this.itemsList);
  }

  remove(item: Item) {
    this.itemsList = this.itemsList.filter((e) => e !== item);
    //tworzy sie nowa tablica, bierzemy kazdy element na liscie (e), jezeli jest true to warunek zachowa ten element, zachowane elementy tworza nowa tablice, ktora przypisana jest do naszej listy
    this.itemsListObs.next(this.itemsList);
  }

  removeRented(item: Item) {
    this.itemsRented = this.itemsRented.filter((e) => e !== item);
    this.itemsRentedObs.next(this.itemsRented);
  }

  rented(item: Item) {
    this.itemsRented.push(item);
    this.remove(item);
    this.itemsRentedObs.next(this.itemsRented);
  }

  back(item: Item) {
    this.itemsList.push(item);
    this.removeRented(item);
    this.itemsListObs.next(this.itemsList);
  }

  getItemsListObs(): Observable<Array<Item>> {
    return this.itemsListObs.asObservable();
  }
  getItemsRentedObs(): Observable<Array<Item>> {
    return this.itemsRentedObs.asObservable();
  }
  saveItemsFirebase() {
    this.httpService.saveItems(this.itemsListObs.getValue());
  }
}
