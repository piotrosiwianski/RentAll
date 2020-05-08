import { AboutComponent } from "./about/about.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { RentedItemComponent } from "./rented-item/rented-item.component";
import { TorentItemComponent } from "./torent-item/torent-item.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuardService } from "./auth/auth-guard.service";

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
    canActivate: [AuthGuardService],
  },
  {
    path: "torentItem",
    component: TorentItemComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "rentedItem",
    component: RentedItemComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
