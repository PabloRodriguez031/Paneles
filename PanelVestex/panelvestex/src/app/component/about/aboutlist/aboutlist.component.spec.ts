import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutlistComponent } from './aboutlist.component';

describe('AboutlistComponent', () => {
  let component: AboutlistComponent;
  let fixture: ComponentFixture<AboutlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
