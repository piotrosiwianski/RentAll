import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AppRoutingModule } from "./app.routing.module";
import { ItemsService } from "./services/item.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { TorentItemComponent } from "./torent-item/torent-item.component";
import { RentedItemComponent } from "./rented-item/rented-item.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { AuthService } from "./auth/auth.service";

const config = {
  apiKey: "AIzaSyBwl37LxrwR1nFTVDOIs_nwB0cmwsJu15c",
  authDomain: "auth-18e17.firebaseapp.com",
  databaseURL: "https://auth-18e17.firebaseio.com",
  projectId: "auth-18e17",
  storageBucket: "auth-18e17.appspot.com",
  messagingSenderId: "873460317660",
};

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    TorentItemComponent,
    RentedItemComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  providers: [ItemsService, AuthGuardService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
