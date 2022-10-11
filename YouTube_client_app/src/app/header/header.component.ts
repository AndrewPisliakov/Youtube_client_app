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

  onSubmit(form) {
    this.onChanged.emit(form);
    this.onChanged.emit(this.textInput);
  }



  ngOnInit(): void {
  }

}
