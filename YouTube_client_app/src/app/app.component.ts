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

  clickSortDate(event: boolean) {
    if (this.cards.length > 0) {
      this.cards.sort((a: any, b: any) => {
        const start = Date.parse(a.snippet.publishedAt);
        const finish = Date.parse(b.snippet.publishedAt);
        return start - finish;
      });
    }
  
    this.showSorting = !this.showSorting;
    console.log(event);

    this.sortBy = SortOptions.Date;
  }

  eventFormInput(texInputfromHeader) {
    this.searchPanelInput = texInputfromHeader;
    this.cards = data.items;
  }
}


console.log(new AppComponent().cards);
/* new AppComponent().clickSortDate(); */
console.log(new AppComponent().cards);
