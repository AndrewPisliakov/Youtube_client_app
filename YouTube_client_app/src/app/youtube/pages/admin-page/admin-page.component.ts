import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  myForm: FormGroup;

  constructor() { 
  }

  onSubmit() {
    console.log('Форма ушла на сервер');
    console.log(this.myForm);
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      "title": new FormControl('Please enter a title', [Validators.required, Validators.minLength(5)]),
      "discription": new FormControl(),
      "img": new FormControl(),
      "link": new FormControl()
    });

    this.myForm.valueChanges.subscribe(value => console.log(value));
    this.myForm.statusChanges.subscribe(status => console.log(status))
  }

 

}
