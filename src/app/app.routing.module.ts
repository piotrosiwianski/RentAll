import { AboutComponent } from "./about/about.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { RentedItemComponent } from "./rented-item/rented-item.component";
import { TorentItemComponent } from "./torent-item/torent-item.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full",
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "addItem",
    component: AddItemComponent,
  },
  {
    path: "torentItem",
    component: TorentItemComponent,
  },
  {
    path: "rentedItem",
    component: RentedItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
