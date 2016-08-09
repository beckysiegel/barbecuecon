import { Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Event }        from './event';
import { EventsService } from './events.service';

@Component({
    selector: 'my-event-detail',
    templateUrl: 'app/event-detail.component.html',
})

export class EventDetailComponent implements OnInit {
    @Input() event: Event;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private eventsService: EventsService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.eventsService.getEvent(id)
                    .then(event => this.event = event);
            } else {
                this.navigated = false;
                this.event = new Event();
            }
        });
    }
}
