import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  submitSignupForm(name, medium, location, statement, email, password) {
    this.authService.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log('signup error');
    })
  }

}
