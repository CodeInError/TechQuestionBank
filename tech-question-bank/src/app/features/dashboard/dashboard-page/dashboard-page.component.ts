import { Component } from '@angular/core';
import { ContinueLearningCardComponent } from '../continue-learning-card/continue-learning-card.component';
import { DailyChallengeCardComponent } from '../daily-challenge-card/daily-challenge-card.component';
import { CategoriesGridComponent } from '../categories-grid/categories-grid.component';
import { PopularQuestionsComponent } from '../popular-questions/popular-questions.component';
import { RecentActivityComponent } from '../recent-activity/recent-activity.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [ContinueLearningCardComponent,DailyChallengeCardComponent,CategoriesGridComponent,
            PopularQuestionsComponent,RecentActivityComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
