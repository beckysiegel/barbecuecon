import { Component } from '@angular/core';
import { Router }            from '@angular/router';


@Component({
    selector: 'signup',
    templateUrl: 'app/signup.component.html',
})
export class SignupComponent{
    events: Event[];

    constructor(
        private router: Router
        ) { }
}
