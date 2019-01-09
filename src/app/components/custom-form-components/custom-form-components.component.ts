import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-form-components',
  templateUrl: './custom-form-components.component.html',
  styleUrls: ['./custom-form-components.component.scss']
})
export class CustomFormComponentsComponent implements OnInit {

  @Input()
  textboxdata

  @Input()
  textareadata

  @Input()
  buttondata

  @Input()
  checkboxdata

  @Input()
  radiobuttondata


  constructor() { }

  ngOnInit() {
    // console.log(this.textboxdata)
  }

}
