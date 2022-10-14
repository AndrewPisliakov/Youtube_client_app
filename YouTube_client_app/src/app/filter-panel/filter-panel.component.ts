import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})


export class FilterPanelComponent implements OnInit {

@Output() onClickFromFilterPanel = new EventEmitter<string>();
@Output() inputValueFilterPanel = new EventEmitter<string>();

  classAcive = '';
  inputValue = '';

  onTitleChange(event: string): void{
    this.inputValueFilterPanel.emit(event);
  }

  onClick(data: string) {
    this.classAcive = data;
    this.onClickFromFilterPanel.emit(data);
  }

  ngOnInit(): void {
  }

}

