import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ArtistService } from './artist.service';
import { EventService } from './event.service';
import { ProjectService } from './project.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, ArtistService, EventService, ProjectService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  // login() {
  //   this.authService.login();
  // }

  logout() {
    this.authService.logout();
  }
}
