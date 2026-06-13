import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyChallengeCardComponent } from './daily-challenge-card.component';

describe('DailyChallengeCardComponent', () => {
  let component: DailyChallengeCardComponent;
  let fixture: ComponentFixture<DailyChallengeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyChallengeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyChallengeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
