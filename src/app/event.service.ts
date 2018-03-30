import { Injectable } from '@angular/core';
import { Event } from './models/event';

@Injectable()
export class EventService {
  events: Event[] = [
    {
      name: "Gallery Opening",
      type: "Art",
      location: "423 8th Ave, New York, NY",
      dateTime: new Date("April 6, 2018 18:00:00 EDT"),
      info: "Solo exhibition info..."
    },
    {
      name: "Concert",
      type: "Music",
      location: "1553 Greenwich St, New York, NY",
      dateTime: new Date("April 6, 2018 22:00:00 EDT"),
      info: "Experimental noise music..."
    },
    {
      name: "Open Studio",
      type: "Art",
      location: "248 McKibbin St, Brooklyn, NY",
      dateTime: new Date("March 30, 2018 16:00:00 EDT"),
      info: "Open studio info..."
    },
    {
      name: "Figure Drawing",
      type: "Workshop",
      location: "123 East 32nd Ave, Brooklyn, NY",
      dateTime: new Date("May 15, 2018 18:00:00 EDT"),
      info: "Figure drawing class..."
    }
  ];

  getEvents(): Event[] {
    return this.events;
  }

}
