import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAQuoteComponent } from './request-a-quote.component';

describe('RequestAQuoteComponent', () => {
  let component: RequestAQuoteComponent;
  let fixture: ComponentFixture<RequestAQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
