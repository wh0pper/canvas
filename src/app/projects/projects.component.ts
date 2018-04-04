import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  goToProjectPage(clickedProject) {

  }

}
