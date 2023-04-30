import { Store } from '@ngrx/store';
import { LoginService } from './../../../auth/services/login.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { loadCardsReducer } from 'src/app/redux/actions/youtube.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public yourName = 'Your Name'
  public textInput = '';
  public isFormSubmit: boolean;
  _loginService;

  @Output() onChanged = new EventEmitter();
  @Output() clickFromDate = new EventEmitter<boolean>();

  constructor(private router: Router, private loginService: LoginService,
    private dataService: DataService,
    private store: Store) {
    this._loginService = loginService;

    if (this._loginService.getUserData()) {
      this.yourName = this._loginService.getUserData().loginName;
    }
  }

  clickDate(isTrue: any) {
    this.clickFromDate.emit(isTrue);
  }

  onSubmit(form: any) {
    this.onChanged.emit(form);
    this.onChanged.emit(this.textInput);
  }

  toLoginNavigate() {
    if (this._loginService.getUserData()) return;
    else {
      this.router.navigate(['login']);
    };
  }

  returnToMainPage() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
/*     this.dataService.getData().subscribe((data) => {
      console.log(data);
    }); */
    this.store.dispatch(loadCardsReducer());
  }

}
