import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from 'src/app/shared/models/models.component';

@Pipe({
  name: 'filterBySymbol'
})
export class FilterBySymbolPipe implements PipeTransform {

  transform(cards: IItem[], param: string, valueInput: string): any {
    
    if (cards.length === 0 || param === "views" || param === "date") {
      return cards;
    }

    return cards.filter((card) => {
      return card.snippet.localized.title.indexOf(valueInput) > -1;
    });
  }
}
