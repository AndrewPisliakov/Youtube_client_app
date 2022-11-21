import { CardAdaptive } from 'src/app/redux/reducers/youtube.redux';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() card: CardAdaptive;
  public cardId: string = '';
  public viewCount: 55555;
  
  constructor(
    public activateRoute: ActivatedRoute, private store: Store) {
   
  }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
  }
}



