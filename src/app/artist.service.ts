import { Injectable } from '@angular/core';
import { Artist } from './models/artist';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ArtistService {
  artists: FirebaseListObservable<any[]>;

  constructor(private authService: AuthenticationService, private database: AngularFireDatabase) {
    this.artists = database.list('artists');
  }

  getArtists() {
    return this.artists;
  }

  getArtistById(userUID: string) {
    return this.database.list('artists', {query: {orderByChild: "userUID", equalTo: userUID}});
  }

  registerNewArtist(userName, email, password) {
    this.authService.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      console.log('create success')
    }, error => console.log('signup error'));
  }
}
