import { Router } from "@angular/router";
import { AuthService } from "./auth/auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "rentAll";

  constructor(public authService: AuthService, private router: Router) {}
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
