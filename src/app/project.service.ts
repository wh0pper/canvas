import { Injectable } from '@angular/core';
import { Project } from './models/project';


@Injectable()
export class ProjectService {
  projects: Project[] = [
    {
      title: "Example Project 1",
      artist: "Artist 1",
      medium: "Sculpture",
      imgURL: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/313e1541598569.57ac4240063b7.jpg",
      info: "Project info..."
    },
    {
      title: "Example Project 2",
      artist: "Artist 2",
      medium: "Digital Art",
      imgURL: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/78a53a52241083.59ea1e65e1f07.jpg",
      info: "Project info..."
    },
    {
      title: "Example Music Project",
      artist: "Musician 1",
      medium: "Electronic Music",
      imgURL: "https://i1.sndcdn.com/artworks-000312169044-um407k-t500x500.jpg",
      info: "Project info..."
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

}
