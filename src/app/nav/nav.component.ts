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

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  // signup() {
  //   this.router.navigate(['signup']);
  // }

  goToUsersPage() {
    console.log(this.user);
    //navigate based on this.user uid
  }
}
