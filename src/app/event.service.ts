import { Injectable } from '@angular/core';
import { Event } from './models/event';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events = database.list('events');
  }

  getEvents() {
    return this.events;
  }

  addNewEvent(newEvent: Event) {
    this.database.list('events').push(newEvent);
  }

}
