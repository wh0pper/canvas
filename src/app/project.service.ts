import { Injectable } from '@angular/core';
import { Project } from './models/project';

@Injectable()
export class ProjectService {
  projects: Project[] = [
    new Project("Example Project 1"),
    new Project("Example Project 2")
  ]

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

}
