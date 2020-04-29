import { Component, OnInit } from "@angular/core";
import { ItemsService } from "./../services/item.service";
import { Item } from "../models/item";

@Component({
  selector: "app-torent-item",
  templateUrl: "./torent-item.component.html",
  styleUrls: ["./torent-item.component.css"],
})
export class TorentItemComponent implements OnInit {
  itemsList: Array<Item> = [];

  //do kostruktora wstrzykujemy serwis
  constructor(private itemsService: ItemsService) {
    this.itemsService.getItemsListObs().subscribe((items: Array<Item>) => {
      this.itemsList = items;
    });
  }

  ngOnInit(): void {}

  remove(item: Item) {
    this.itemsService.remove(item);
  }
  rented(item: Item) {
    this.itemsService.rented(item);
  }
}
