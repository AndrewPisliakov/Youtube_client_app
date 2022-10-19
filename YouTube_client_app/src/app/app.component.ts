import { Component, OnInit } from '@angular/core';

import { data, SortOptions } from './youtube/models/models.component';
import { IItem } from './youtube/models/models.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  cards: IItem[] = [];
  showSorting: boolean = true;
  searchPanelInput: string = '';
  searchPanelInput2: string = ''
  
  sortBy: SortOptions = SortOptions.Date;

  ngOnInit(): void {
  }

  inputValueTwo(value: string){
    this.searchPanelInput2 = value;
  }

  onClickFilter(data: string) {
    this.searchPanelInput = data;
  }

  clickButtonFilter(event: boolean) {
    this.showSorting = !this.showSorting;
    this.sortBy = SortOptions.Date;
  }

  eventFormInput(texInputfromHeader: any) {
    this.searchPanelInput = texInputfromHeader;
    this.cards = data.items;
  }
}