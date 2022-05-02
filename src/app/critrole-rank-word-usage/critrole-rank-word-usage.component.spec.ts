import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CritroleRankWordUsageComponent} from './critrole-rank-word-usage.component';

describe('CritroleRankWordUsageComponent', () => {
  let component: CritroleRankWordUsageComponent;
  let fixture: ComponentFixture<CritroleRankWordUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CritroleRankWordUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritroleRankWordUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
