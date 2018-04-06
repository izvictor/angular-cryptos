import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptosTodayComponent } from './cryptos-today.component';

describe('CryptosTodayComponent', () => {
  let component: CryptosTodayComponent;
  let fixture: ComponentFixture<CryptosTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptosTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptosTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
