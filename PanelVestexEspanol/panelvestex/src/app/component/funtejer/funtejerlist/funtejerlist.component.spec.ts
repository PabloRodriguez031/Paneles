import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuntejerlistComponent } from './funtejerlist.component';

describe('FuntejerlistComponent', () => {
  let component: FuntejerlistComponent;
  let fixture: ComponentFixture<FuntejerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuntejerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuntejerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
