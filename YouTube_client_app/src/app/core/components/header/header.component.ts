import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  textInput = '';

  @Output() onChanged = new EventEmitter();
  @Output() clickFromDate = new EventEmitter<boolean>();

  constructor( private router: Router) {}

  clickDate(isTrue: any) {
    this.clickFromDate.emit(isTrue);
  }

  onSubmit(form: any) {
    this.onChanged.emit(form);
    this.onChanged.emit(this.textInput);
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  returnToMainPage(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
