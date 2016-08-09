import { Component } from '@angular/core';
import { Router }            from '@angular/router';


@Component({
    selector: 'welcome',
    templateUrl: 'app/welcome.component.html',
})
export class WelcomeComponent{
    events: Event[];

    constructor(
        private router: Router
        ) { }
}
