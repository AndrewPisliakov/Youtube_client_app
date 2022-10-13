import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})


export class FilterPanelComponent implements OnInit {

@Output() onClickFromFilterPanel = new EventEmitter<string>();

  classAcive = '';

  onClick(data: string) {
    this.classAcive = data;
    this.onClickFromFilterPanel.emit(data);
  }

  ngOnInit(): void {
  }

}

