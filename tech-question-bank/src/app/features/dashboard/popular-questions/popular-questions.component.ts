import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-popular-questions',
  standalone: true,
  imports: [NgFor],
  templateUrl: './popular-questions.component.html',
  styleUrl: './popular-questions.component.scss'
})
export class PopularQuestionsComponent {

  questions = [
    {
      title: 'What are Angular Signals?',
      tag: 'Angular'
    },
    {
      title: 'What is Change Detection?',
      tag: 'Angular'
    },
    {
      title: 'RxJS Subject vs BehaviorSubject',
      tag: 'RxJS'
    },
    {
      title: 'What is TypeScript Generics?',
      tag: 'TypeScript'
    },
    {
      title: 'How does Event Loop work?',
      tag: 'JavaScript'
    }
  ];

}