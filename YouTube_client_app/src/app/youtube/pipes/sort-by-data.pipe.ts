import { CardAdaptive } from './../../redux/reducers/youtube.redux';
import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from 'src/app/shared/models/models.component';

@Pipe({
  name: 'sortByData'
})
export class SortByDataPipe implements PipeTransform {

  transform(cards: CardAdaptive[], param: string): any {
    if (!cards || !param) {
      return cards;
    };

    if (param === 'date') { 
    return cards.sort((a: CardAdaptive, b: CardAdaptive) => {
      return Date.parse(a.publishedAt) - Date.parse(b.publishedAt);  
    })
  }

    if (param === "views") {
      return cards.sort( (a: CardAdaptive, b: CardAdaptive) => {
        return Number(b.viewCount) - Number(a.viewCount) 
      });
    }
debugger;
    if (param === "words") {
      return cards.sort( (a: CardAdaptive, b: CardAdaptive) => {
        return b.title > a.title ? -1 : 1
      });
    }

  }

}

/*  Date = 'date',
    Views = 'views',
    Words = 'words' */