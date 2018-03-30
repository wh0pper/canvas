import { Injectable } from '@angular/core';
import { Artist } from './models/artist';

@Injectable()
export class ArtistService {
  artists: Artist[] = [
    {
      id: 1,
      name: "Artist 1",
      medium: "Visual",
      location: "Portland, OR",
      statement: "Artist1 statement..."
    },
    {
      id: 2,
      name: "Artist 2",
      medium: "Music",
      location: "Seattle, WA",
      statement: "Artist2 statement..."
    },
    {
      id: 3,
      name: "Artist 3",
      medium: "Video",
      location: "Los Angeles, CA",
      statement: "Artist3 statement..."
    },
  ];

  getArtists(): Artist[] {
    return this.artists;
  }

}
