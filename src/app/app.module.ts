import { HttpService } from "./services/http.service";
import { HttpClientModule } from "@angular/common/http";
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

const firebaseConfig = {
  apiKey: "AIzaSyBL39YrwlcI9fmIs2tVKTSvD-cw4EPJe1M",
  authDomain: "rentall-98336.firebaseapp.com",
  databaseURL: "https://rentall-98336.firebaseio.com",
  projectId: "rentall-98336",
  storageBucket: "rentall-98336.appspot.com",
  messagingSenderId: "898461990196",
  appId: "1:898461990196:web:aca7bafbe55c5d9cb5f961",
  measurementId: "G-QJT9CBX0M3",
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [ItemsService, AuthGuardService, AuthService, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
