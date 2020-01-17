import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlistComponent } from './footerlist.component';

describe('FooterlistComponent', () => {
  let component: FooterlistComponent;
  let fixture: ComponentFixture<FooterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
