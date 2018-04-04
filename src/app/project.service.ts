import { Injectable } from '@angular/core';
import { Project } from './models/project';
import { Artist } from './models/artist';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

}


// = [
//   {
//     title: "Example Project 1",
//     artist: "Artist 1",
//     medium: "Sculpture",
//     imgURLs: [
//       "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/313e1541598569.57ac4240063b7.jpg", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e6edba44557647.581657159c41d.jpg", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/791a7244557647.581657159d69f.jpg",
//       "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2fda9f44557647.58165715a08f3.jpg"
//     ],
//     info: "Project info..."
//   },
//   {
//     title: "Example Project 2",
//     artist: "Artist 2",
//     medium: "Digital Art",
//     imgURLs: [
//       "https://mir-s3-cdn-cf.behance.net/project_modules/fs/78a53a52241083.59ea1e65e1f07.jpg",
//       "https://mir-s3-cdn-cf.behance.net/project_modules/fs/eaa17b52241083.59ee0fbe454c6.jpg",
//       "https://mir-s3-cdn-cf.behance.net/project_modules/fs/9e7ba852241083.59ee0fbe464e8.jpg"
//     ],
//     info: "Project info..."
//   },
//   {
//     title: "Example Music Project",
//     artist: "Musician 1",
//     medium: "Electronic Music",
//     imgURLs: [
//       "https://i1.sndcdn.com/artworks-000312169044-um407k-t500x500.jpg",
//     ],
//     info: "Project info..."
//   }
// ];
