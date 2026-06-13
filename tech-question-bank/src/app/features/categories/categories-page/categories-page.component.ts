import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss'
})
export class CategoriesPageComponent {

  categories = [
    {
      name: 'Angular',
      icon: '🅰️',
      questions: 120,
      progress: 70
    },
    {
      name: 'JavaScript',
      icon: '🟨',
      questions: 150,
      progress: 60
    },
    {
      name: 'TypeScript',
      icon: '🔷',
      questions: 80,
      progress: 65
    },
    {
      name: 'RxJS',
      icon: '🟣',
      questions: 50,
      progress: 40
    },
    {
      name: 'Git',
      icon: '📦',
      questions: 40,
      progress: 45
    },
    {
      name: 'Node.js',
      icon: '🟢',
      questions: 70,
      progress: 55
    }
  ];

}