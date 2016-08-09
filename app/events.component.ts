import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Event }                from './event';
import { EventsService }         from './events.service';

@Component({
    selector: 'my-events',
    templateUrl: 'app/events.component.html',
})
export class EventsComponent implements OnInit {
    events: Event[];
    selectedEvent: Event;
    error: any;

    constructor(
        private router: Router,
        private eventService: EventsService) { }

    getEvents() {
        this.eventService
            .getEvents()
            .then(events => this.events = events)

            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.getEvents();
    }

    onSelect(event: Event) {
        this.selectedEvent = event;
    }

    gotoDetail(event: Event) {
        this.selectedEvent = event;
        this.router.navigate(['/detail', this.selectedEvent.id]);
    }
}
