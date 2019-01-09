import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-textbox',
  templateUrl: './custom-textbox.component.html',
  styleUrls: ['./custom-textbox.component.scss']
})
export class CustomTextboxComponent implements OnInit {

  @Input()
  textboxdata

  constructor() { }

  ngOnInit() {
    
  }

}
