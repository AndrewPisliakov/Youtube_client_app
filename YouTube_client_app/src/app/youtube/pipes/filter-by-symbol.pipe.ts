import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from 'src/app/shared/models/models.component';
import { YoutubeService } from '../services/youtube.service';

@Pipe({
  name: 'filterBySymbol'
})
export class FilterBySymbolPipe implements PipeTransform {
  constructor(private youtubeServise: YoutubeService) {}

  transform(cards: IItem[], param: string, valueInput: string): any {
    if ( param === "views" || param === "date") {
      return this.youtubeServise.getCards();
    }

    return cards.filter((card) => {
      return card.snippet.localized.title.indexOf(valueInput) > -1;
    });
  }
}
