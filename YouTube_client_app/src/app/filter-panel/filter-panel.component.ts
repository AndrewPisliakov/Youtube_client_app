import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})


export class FilterPanelComponent implements OnInit {

  @Output() clickFromDate = new EventEmitter();


  clickDate() {
    this.clickFromDate.emit();
  }



  ngOnInit(): void {
  }

}

