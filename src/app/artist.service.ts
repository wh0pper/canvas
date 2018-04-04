import { Injectable } from '@angular/core';
import { Artist } from './models/artist';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArtistService {
  artists: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.artists = database.list('artists');
  }

  getArtists() {
    return this.artists;
  }

  getArtistById(artistId: string) {
    return this.database.object('artists/' + artistId)
  }

}

//  Artist[] = [
//   {
//     id: 1,
//     name: "Artist 1",
//     medium: "Visual",
//     location: "Portland, OR",
//     statement: "Artist1 statement..."
//   },
//   {
//     id: 2,
//     name: "Artist 2",
//     medium: "Music",
//     location: "Seattle, WA",
//     statement: "Artist2 statement..."
//   },
//   {
//     id: 3,
//     name: "Artist 3",
//     medium: "Video",
//     location: "Los Angeles, CA",
//     statement: "Artist3 statement..."
//   },
// ];
