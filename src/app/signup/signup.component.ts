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
  }

}
