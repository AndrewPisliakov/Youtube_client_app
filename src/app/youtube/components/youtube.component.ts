import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { IItem, SortOptions } from 'src/app/shared/models/models.component';
import { YoutubeService } from '../services/youtube.service';
import { adminSelector } from 'src/app/redux/selectors/youtube.selector';
import { map, filter, concatAll } from 'rxjs/operators';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})

export class YoutubeComponent implements OnInit {

  cards$ = this.store.select(adminSelector).pipe(
    map(card => {
      return card.map(card => {
       // console.log(card);
        return {
          url: card.youtubeCard.snippet.thumbnails.medium.url,
          id: card.youtubeCard.id,
          title: card.youtubeCard.snippet.title,
          viewCount: card.youtubeCard.statistics.viewCount,
          likeCount: card.youtubeCard.statistics.likeCount,
          dislikeCount: card.youtubeCard.statistics.dislikeCount,
          favoriteCount: card.youtubeCard.statistics.favoriteCount,
          commentCount: card.youtubeCard.statistics.commentCount,
          publishedAt: card.youtubeCard.snippet.publishedAt
        };
      })
    })
  )/* .subscribe(data => console.log(data));  */

  /* .subscribe(data => data.map(card => {
    this.idArr.push(card.youtubeCard.id.videoId);
    // тут вызввать МОЖНО!!!!
  })); */

  showSorting: boolean = true;
  searchPanelInput: string = '';
  searchPanelInput2: string = '';
  sortBy: SortOptions = SortOptions.Date;

  constructor(private youtubeService: YoutubeService, private _dataservice: DataService,
    private store: Store) {

    _dataservice.getData() // getDataWithStatistic();
    // this.cards = youtubeService.getCards(); - моковые данные для Storage
  }

  ngOnInit(): void {
    /*  для моковых данных   this._dataservice.getData().subscribe(cards => {    
          return this.cards = cards.items
        }); */
  }

  inputValueTwo(value: string) {
    this.searchPanelInput2 = value;
  }

  onClickFilter(word: string) {
    this.searchPanelInput = word;
  }

  clickButtonFilter(event: boolean) {
    this.showSorting = !this.showSorting;
    this.sortBy = SortOptions.Date;
  }

  eventFormInput(texInputfromHeader: any) {
    this.searchPanelInput = texInputfromHeader;
  }
}

/*
cards$ = this.store.select(adminSelector); //   this.store.pipe(select(adminSelector))
 
cards$ = this.store.select(adminSelector).pipe(map, filter, take).subscribe(????? ); 

    this.cardsToHighlight$ = this.cards$.pipe(map(), take(3));
    this.cardsToJustRender$ = this.cards$.pipe(skip(3)).subscribe(x => this.cards = x) // send http request);
 
    <app-cards let card in cards$ | async>
    */