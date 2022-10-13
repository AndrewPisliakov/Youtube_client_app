import { Component, OnInit } from '@angular/core';

import { data, SortOptions } from './models/models.component';
import { IItem } from './models/models.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  cards: IItem[] = [];
  showSorting: boolean = true;
  searchPanelInput: string = '';
  
  sortBy: SortOptions = SortOptions.Date;


  ngOnInit(): void {
  }

  onClickFilter(data: string) {
    this.searchPanelInput = data;
  }

  clickButtonFilter(event: boolean) {
    this.showSorting = !this.showSorting;
    console.log(event);

    this.sortBy = SortOptions.Date;
  }

  eventFormInput(texInputfromHeader: any) {
    this.searchPanelInput = texInputfromHeader;
    this.cards = data.items;
    console.log(this.cards);
  }
}