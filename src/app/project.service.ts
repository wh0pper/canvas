import { Injectable } from '@angular/core';
import { Project } from './models/project';


@Injectable()
export class ProjectService {
  projects: Project[] = [
    { title: "Example Project 1" },
    { title: "Example Project 2" }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

}
