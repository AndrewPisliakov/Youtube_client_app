import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from 'src/app/shared/models/models.component';
import { YoutubeService } from '../../services/youtube.service';


@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss']
})

export class DetailedPageComponent implements OnInit {

  cardId: string = '';
  currentCard: IItem;

  constructor(
    public youtubeService: YoutubeService, 
    public activateRoute: ActivatedRoute,
    private router: Router) {

    this.cardId = activateRoute.snapshot.params.id;
    this.currentCard = youtubeService.getId(this.cardId);
   }

  public backHome(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}