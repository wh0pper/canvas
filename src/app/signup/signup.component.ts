import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public artistService: ArtistService) { }

  ngOnInit() {
  }

  submitSignupForm(name, medium, location, statement, email, password) {
    this.artistService.registerNewArtist(name, email, password);
    //if creation is successful, also logs in
    // this.authService.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {
    //   this.authService.database.ref("users").push({"displayName": name});
    // }, error => console.log('signup error'));
  }

}
