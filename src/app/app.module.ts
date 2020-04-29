import { AppRoutingModule } from "./app.routing.module";
import { ItemsService } from "./services/item.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { TorentItemComponent } from "./torent-item/torent-item.component";
import { RentedItemComponent } from "./rented-item/rented-item.component";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    TorentItemComponent,
    RentedItemComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
