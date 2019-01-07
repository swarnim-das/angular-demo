import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-text-box-comp',
  templateUrl: './text-box-comp.component.html',
  styleUrls: ['./text-box-comp.component.scss']
})
export class TextBoxCompComponent implements OnInit {

  @Input()
  users

  constructor() { }

  ngOnInit() {
  }

}
