import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions-page.component.html',
  styleUrl: './questions-page.component.scss'
})
export class QuestionsPageComponent {

  categories = [
    'All',
    'Angular',
    'JavaScript',
    'TypeScript',
    'RxJS'
  ];

  difficulties = [
    'Easy',
    'Medium',
    'Hard'
  ];

  questions = [
    {
      title: 'What are Angular Signals?',
      category: 'Angular',
      difficulty: 'Medium'
    },
    {
      title: 'What is Change Detection?',
      category: 'Angular',
      difficulty: 'Easy'
    },
    {
      title: 'RxJS Subject vs BehaviorSubject',
      category: 'RxJS',
      difficulty: 'Medium'
    },
    {
      title: 'What is Dependency Injection?',
      category: 'Angular',
      difficulty: 'Easy'
    },
    {
      title: 'Explain Event Loop',
      category: 'JavaScript',
      difficulty: 'Hard'
    }
  ];

}