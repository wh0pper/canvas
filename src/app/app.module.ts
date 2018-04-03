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

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDoman: masterFirebaseConfig.authDomain,
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
    ArtistPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    ProjectService,
    EventService,
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
