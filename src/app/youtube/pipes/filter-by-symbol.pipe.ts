import { Pipe, PipeTransform } from '@angular/core';
import { CardAdaptive } from 'src/app/redux/reducers/youtube.redux';
import { YoutubeService } from '../services/youtube.service';

@Pipe({
  name: 'filterBySymbol'
})
export class FilterBySymbolPipe implements PipeTransform {
  constructor(private youtubeServise: YoutubeService) {}

  transform(cards: CardAdaptive[], param: string, valueInput: string) {
    /* if ( param === "views" || param === "date") {
      return this.youtubeServise.getCards();
    } */
 
      return cards.filter((card) => {
        return card.title.indexOf(valueInput) > -1;
      });

  }
}
