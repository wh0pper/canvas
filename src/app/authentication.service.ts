import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ArtistService } from './artist.service';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private artistService: ArtistService) {
    this.user = afAuth.authState;
  }
  //
  // login(email, password) {
  //   //google: this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  //
  //   this.user.subscribe(userData => {
  //     // this.artistService.storeUserData(userData);
  //     console.log(userData)
  //   });
  // }

  loginWithEmail(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log('email login error in auth service');
      console.log(error);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
