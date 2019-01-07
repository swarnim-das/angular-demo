import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.scss']
})
export class FormComponentsComponent implements OnInit {

  constructor() { }

  user: Array<any> = [
    {
      label: 'firstName',
      name: 'firstName',
      required: true
    },
    {
      label: 'lastName',
      name: 'lastName',
      required: true
    },
    {
      label: 'email',
      name: 'email',
      required: true
    }
  ]

  ngOnInit() {
  }

}
