import { Component, OnInit } from '@angular/core';
import { IItem, SortOptions } from './shared/models/models.component';
import { YoutubeService } from './youtube/services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  
}