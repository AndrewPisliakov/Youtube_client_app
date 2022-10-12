import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  textInput = '';

  @Output() onChanged = new EventEmitter();
  @Output() clickFromDate = new EventEmitter<boolean>();

  clickDate(isTrue: any) {
    this.clickFromDate.emit(isTrue);
  }

  onSubmit(form: any) {
    this.onChanged.emit(form);
    this.onChanged.emit(this.textInput);
  }

  ngOnInit(): void {
  }

}
