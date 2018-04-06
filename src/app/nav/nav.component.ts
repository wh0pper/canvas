import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [AuthenticationService]
})

export class NavComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(private router: Router, public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
      this.user = user;
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  goToUsersPage() {
    this.router.navigate(["artist", this.user.uid])
  }
}
