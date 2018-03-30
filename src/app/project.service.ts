import { Injectable } from '@angular/core';
import { Project } from './models/project';


@Injectable()
export class ProjectService {
  projects: Project[] = [
    { title: "Example Project 1", imgURL: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/313e1541598569.57ac4240063b7.jpg" },
    { title: "Example Project 2", imgURL: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/78a53a52241083.59ea1e65e1f07.jpg" }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

}
