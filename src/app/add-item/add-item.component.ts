import { Component, OnInit } from "@angular/core";
import { Item } from "../models/item";
import { ItemsService } from "./../services/item.service";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"],
})
export class AddItemComponent implements OnInit {
  newItem: string;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {}

  add() {
    const item: Item = { name: this.newItem };
    this.itemsService.add(item);
    this.newItem = "";
  }
}
