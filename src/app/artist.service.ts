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

  getArtistById(artistId: string) {
    return this.database.object('artists/' + artistId)
  }

  // storeUserData(userDataFromAuth) {
  //   this.database.object('artists/' + userDataFromAuth.uid);
  // }

  registerNewArtist(userName, email, password) {
    this.authService.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log('create success')
      console.log(user);
      user.updateProfile({"displayName": name}).then(() => {
        console.log("update successful");
      });
      console.log(user.displayName);
      debugger;
      // this.authService.afAuth.auth.database("users").push({"displayName": name});
    }, error => console.log('signup error'));
  }
}
