import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Event } from './event';

@Injectable()
export class EventsService {

    private eventsUrl = 'app/events';  // URL to web api

    constructor(private http: Http) { }

    getEvents() {
        return this.http.get(this.eventsUrl)
            .toPromise()
            .then(response => response.json().data as Event[])
            .catch(this.handleError);
    }

    getEvent(id: number) {
        return this.getEvents()
            .then(events => events.find(event => event.id === id));
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
