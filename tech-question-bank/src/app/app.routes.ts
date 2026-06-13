import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard-page/dashboard-page.component')
        .then(m => m.DashboardPageComponent)
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./features/categories/categories-page/categories-page.component')
        .then(m => m.CategoriesPageComponent)
  },
  {
    path: 'questions',
    loadComponent: () =>
      import('./features/questions/questions-page/questions-page.component')
        .then(m => m.QuestionsPageComponent)
  },
  {
    path: 'bookmarks',
    loadComponent: () =>
      import('./features/bookmarks/bookmarks-page/bookmarks-page.component')
        .then(m => m.BookmarksPageComponent)
  },
  {
  path: 'quiz',
  loadComponent: () =>
    import('./features/quiz/quiz-page/quiz-page.component')
      .then(m => m.QuizPageComponent)
},
{
  path: 'progress',
  loadComponent: () =>
    import('./features/progress/progress-page/progress-page.component')
      .then(m => m.ProgressPageComponent)
},
{
  path: 'profile',
  loadComponent: () =>
    import('./features/profile/profile-page/profile-page.component')
      .then(m => m.ProfilePageComponent)
},
{
  path: 'settings',
  loadComponent: () =>
    import('./features/settings/settings-page/settings-page.component')
      .then(m => m.SettingsPageComponent)
},
{
  path: 'question/:id',
  loadComponent: () =>
    import('./features/question-details/question-details-page/question-details-page.component')
      .then(m => m.QuestionDetailsPageComponent)
}
];