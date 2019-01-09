import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormComponentsComponent } from './custom-form-components.component';

describe('CustomFormComponentsComponent', () => {
  let component: CustomFormComponentsComponent;
  let fixture: ComponentFixture<CustomFormComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
