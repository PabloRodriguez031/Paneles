import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomevistaComponent } from './homevista.component';

describe('HomevistaComponent', () => {
  let component: HomevistaComponent;
  let fixture: ComponentFixture<HomevistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomevistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
