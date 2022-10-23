import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from 'src/app/shared/models/models.component';

@Pipe({
  name: 'sortByData'
})
export class SortByDataPipe implements PipeTransform {

  transform(cards: IItem[], param: string): any {
    if (!cards || !param) {
      return cards;
    };

    if (param === 'date') { 
    return cards.sort((a: any, b: any) => {
      return Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt);
    })
  }

    if (param === "views") {
      return cards.sort( (a: any, b: any) => {
        return b.statistics.viewCount - a.statistics.viewCount 
      });
    }

  }

}

/*     Date = 'date',
    Views = 'views',
    Words = 'words' */