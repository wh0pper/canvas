import { Injectable } from '@angular/core';
import { Event } from './models/event';

@Injectable()
export class EventService {
  events: Event[] = [
    {
      name: "Gallery Opening",
      type: "Art",
      location: "423 8th Ave, New York, NY",
      date: "April 6, 2018",
      time: "6-9 pm",
      info: "Solo exhibition info..."
    },
    {
      name: "Concert",
      type: "Music",
      location: "1553 Greenwich St, New York, NY",
      date: "April 6, 2018",
      time: "10 pm",
      info: "Experimental noise music..."
    },
    {
      name: "Open Studio",
      type: "Art",
      location: "248 McKibbin St, Brooklyn, NY",
      date: "May 15, 2018",
      time: "4-7pm",
      info: "Open studio info..."
    },
  ];

  getEvents(): Event[] {
    return this.events;
  }

}
