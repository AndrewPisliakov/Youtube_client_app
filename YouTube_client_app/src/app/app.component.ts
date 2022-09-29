import { Component } from '@angular/core';

import { getData } from './models/models.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YouTube_client_app';
}


console.log(getData());

