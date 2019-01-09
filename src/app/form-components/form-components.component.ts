import { Component, OnInit, ViewChild } from '@angular/core';

import { Textareadata } from '../models/Textareadata';
import { Textboxdata } from '../models/Textboxdata';
import { Checkboxdata } from '../models/Checkboxdata';
import { Radiobuttondata } from '../models/Radiobuttondata';
import { Buttondata } from '../models/Buttondata';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.scss']
})
export class FormComponentsComponent implements OnInit {

  constructor() { }

  buttondata: Buttondata = {
    type: 'button',
    name: 'btn-name',
    value: 'My Button'
  }

  textareadata: Textareadata = {
    rows: 3,
    cols: 30
  }

  radiobuttondata1: Radiobuttondata = {
    type: 'radio',
    name: 'gender',
    value: 'male'
  }

  radiobuttondata2: Radiobuttondata = {
    type: 'radio',
    name: 'gender',
    value: 'female'
  }

  checkboxdata: Checkboxdata = {
    type: 'checkbox',
    name: '',
    value: ''
  }

  textboxdata: Textboxdata = {
    type: 'text',
    name: 'firstName',
    placeholder: 'Enter first name'
  }


  // @ViewChild('userForm') form: any;

  ngOnInit() {
  }

}
