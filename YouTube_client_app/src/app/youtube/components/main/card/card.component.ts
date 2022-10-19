import { Component, Input, OnInit } from '@angular/core';

import { IItem } from 'src/app/youtube/models/models.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input() card: IItem;
 
}



