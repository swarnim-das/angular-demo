import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxCompComponent } from './text-box-comp.component';

describe('TextBoxCompComponent', () => {
  let component: TextBoxCompComponent;
  let fixture: ComponentFixture<TextBoxCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
