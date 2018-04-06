import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { EventAddComponent } from './event-add/event-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'events', component: EventsComponent },
  { path: 'artist/:id', component: ArtistPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newproject', component: ProjectAddComponent },
  { path: 'newevent', component: EventAddComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
