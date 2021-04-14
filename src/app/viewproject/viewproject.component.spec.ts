import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojectComponent } from './viewproject.component';

describe('ViewprojectComponent', () => {
  let component: ViewprojectComponent;
  let fixture: ComponentFixture<ViewprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
