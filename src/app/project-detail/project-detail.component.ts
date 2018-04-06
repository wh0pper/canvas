import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectToDisplayId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => this.projectToDisplayId = urlParameters['id']);
    this.projectToDisplay = this.projectService.getProjectById(this.projectToDisplayId);
    console.log(this.projectToDisplay);
  }

}
