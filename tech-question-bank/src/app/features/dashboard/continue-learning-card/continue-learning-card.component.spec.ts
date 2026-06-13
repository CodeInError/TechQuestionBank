import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueLearningCardComponent } from './continue-learning-card.component';

describe('ContinueLearningCardComponent', () => {
  let component: ContinueLearningCardComponent;
  let fixture: ComponentFixture<ContinueLearningCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueLearningCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinueLearningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
