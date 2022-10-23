import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from 'src/app/shared/models/models.component';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() card: IItem;
  public cardId: string = '';
  
  constructor(
    public activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    
    //this.cardId = this.card.id;
     
  }
}



