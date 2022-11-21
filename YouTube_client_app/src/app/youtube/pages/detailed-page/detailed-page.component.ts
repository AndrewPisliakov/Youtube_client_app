
import { find, mergeMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { CardAdaptive } from 'src/app/redux/reducers/youtube.redux';
import { adminSelector, cardAdaptiveSelector } from 'src/app/redux/selectors/youtube.selector';
import { IItem } from 'src/app/shared/models/models.component';
import { YoutubeService } from '../../services/youtube.service';


@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss']
})

export class DetailedPageComponent implements OnInit {

  cardId: string = '';
  currentCard: CardAdaptive;

  //cardsAdaptive$ = this.store.select(cardAdaptiveSelector).subscribe(data => console.log(data));

/*   cardsAdaptive$ = this.store.select(cardAdaptiveSelector).pipe(
    map(cards => cards.find( (card) => {console.log(card); return card.id === this.cardId}))
  ).subscribe(data => console.log(data));
 */
  cards$ = this.store.select(adminSelector).pipe(
    map(card => {
      return card.map<CardAdaptive>(card => {
        //console.log(card)
        return {
          url: card.youtubeCard.snippet.thumbnails.standard.url,
          id: card.youtubeCard.id,
          title: card.youtubeCard.snippet.title,
          viewCount: card.youtubeCard.statistics.viewCount,
          likeCount: card.youtubeCard.statistics.likeCount,
          dislikeCount: card.youtubeCard.statistics.dislikeCount,
          favoriteCount: card.youtubeCard.statistics.favoriteCount,
          commentCount: card.youtubeCard.statistics.commentCount,
          publishedAt: card.youtubeCard.snippet.publishedAt,
          description: card.youtubeCard.snippet.description
        };
      })
    })
  ).subscribe(
    (cards) => { 
      this.currentCard = cards.find(card => card.id === this.cardId) 
    }
  );

  constructor(
    private store: Store,
    private activateRoute: ActivatedRoute,
    private router: Router) {
    this.cardId = activateRoute.snapshot.params.id;
  }

  public backHome(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}