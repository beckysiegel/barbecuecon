import { Component }          from '@angular/core';

import './rxjs-extensions';

@Component({
  selector: 'my-app',

  template: `
    
    <div class="container-fluid">

      <div class="masthead">
        <ul class="nav nav-pills pull-right">
          <li class="active" routerLink="welcome" routerLinkActive="active"><a>Home</a></li>
          <li routerLink="talks" routerLinkActive="active"><a>Talks</a></li>
        </ul>
        <h3 class="logo" routerLink="welcome" routerLinkActive="active">BarbecueCon2016</h3>
      </div>
      <hr>
      <div class="col-sm-12"><router-outlet></router-outlet></div>
    </div>    
  `
})
export class AppComponent {
  title = 'BBQCON';
}
