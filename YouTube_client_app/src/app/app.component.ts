import { Component } from '@angular/core';

import { data, SortOptions } from './models/models.component';
import { IItem } from './models/models.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  cards: IItem[] = [];
  showSorting = false;
  searchPanelInput: string = '';
  sortBy: SortOptions = SortOptions.Date;

  clickSortDate() {
    this.cards.sort( (a: any, b: any) => {
      const start = Date.parse(a.snippet.publishedAt);
      const finish = Date.parse(b.snippet.publishedAt);
      return start - finish;
    });
    this.sortBy = SortOptions.Date;
  }

  eventFormInput(texInputfromHeader) {
    if (texInputfromHeader) { this.showSorting = true };
    this.searchPanelInput = texInputfromHeader;
    this.cards = data.items;
    this.clickSortDate();
  }


}


console.log(new AppComponent().cards);
/* new AppComponent().clickSortDate(); */
console.log(new AppComponent().cards);
