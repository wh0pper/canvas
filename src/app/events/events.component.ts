import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];
  eventsByMonth: Event[][];
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.events = this.eventService.getEvents();
  }

  getEventsByMonth(): void {
    let eventsByMonth = []; //array of arrays, indexed by month
    for (let m = 0; m < 12; m++) {
      eventsByMonth[m] = [];
    }
    this.events.forEach((event) => {
      let month = event['dateTime'].getMonth();
      eventsByMonth[month].push(event)
    });
    console.log(eventsByMonth);
    this.eventsByMonth = eventsByMonth;
  }

}
