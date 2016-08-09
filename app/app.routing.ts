import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent }  from './welcome.component';
import { EventsComponent }  from './events.component';
import { SignupComponent }  from './signup.component';
import { EventDetailComponent } from './event-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'talks',
        component: EventsComponent
    },
    {
        path: 'detail/:id',
        component: EventDetailComponent
    }
];

export const appRoutingProviders: any[] = [

];


export const routing = RouterModule.forRoot(appRoutes);
