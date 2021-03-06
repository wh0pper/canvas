import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProjectCardComponent } from './project-card/project-card.component';

import { ProjectService } from './project.service';
import { ProjectsComponent } from './projects/projects.component';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { EventsComponent } from './events/events.component';
import { EventService } from './event.service';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ArtistService } from './artist.service';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProjectAddComponent } from './project-add/project-add.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { EventAddComponent } from './event-add/event-add.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProjectCardComponent,
    ProjectsComponent,
    FilterPipe,
    EventsComponent,
    ArtistPageComponent,
    ProjectAddComponent,
    SignupComponent,
    LoginComponent,
    ProjectDetailComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    ProjectService,
    EventService,
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
