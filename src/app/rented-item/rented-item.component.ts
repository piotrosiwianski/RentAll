import { Component, OnInit } from "@angular/core";
import { ItemsService } from "./../services/item.service";
import { Item } from "../models/item";

@Component({
  selector: "app-rented-item",
  templateUrl: "./rented-item.component.html",
  styleUrls: ["./rented-item.component.css"],
})
export class RentedItemComponent implements OnInit {
  itemsRented: Array<Item> = [];

  //w konstruktor wstrzykujemy nasz serwis
  constructor(private itemsService: ItemsService) {
    this.itemsService.getItemsRentedObs().subscribe((items: Array<Item>) => {
      this.itemsRented = items;
    });
  }

  ngOnInit(): void {}

  back(item: Item) {
    this.itemsService.back(item);
  }
}
