import { Component } from '@angular/core';

@Component({
  selector: 'app-question-details-page',
  standalone: true,
  imports: [],
  templateUrl: './question-details-page.component.html',
  styleUrl: './question-details-page.component.scss'
})
export class QuestionDetailsPageComponent {

  question = {
    title: 'What are Angular Signals?',
    category: 'Angular',
    difficulty: 'Medium',

    answer: `
Signals are Angular's reactive primitive
introduced to simplify state management
and improve performance.
`,

    code: `
const count = signal(0);

count.set(1);

console.log(count());
`,

    tip: `
Explain differences between Signals,
Observables and Zone.js based change detection.
`
  };

}