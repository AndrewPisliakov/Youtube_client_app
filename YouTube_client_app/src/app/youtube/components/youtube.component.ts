import { Component, OnInit } from '@angular/core';
import { IItem, SortOptions } from 'src/app/shared/models/models.component';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  cards: IItem[] = [];
  showSorting: boolean = true;
  searchPanelInput: string = '';
  searchPanelInput2: string = ''
  sortBy: SortOptions = SortOptions.Date;

  constructor(private youtubeService: YoutubeService) {
    this.cards = youtubeService.getCards();
    /* if (this.youtubeService.localData) {
      this.cards = this.youtubeService.getCards();
    } */
  }

  inputValueTwo(value: string) {
    this.searchPanelInput2 = value;
  }

  onClickFilter(data: string) {
    this.searchPanelInput = data;
  }

  clickButtonFilter(event: boolean) {
    this.showSorting = !this.showSorting;
    this.sortBy = SortOptions.Date;
  }

  eventFormInput(texInputfromHeader: any) {
    this.searchPanelInput = texInputfromHeader;
    this.cards = this.youtubeService.getCards();
  }

  ngOnInit(): void {
  }

}
