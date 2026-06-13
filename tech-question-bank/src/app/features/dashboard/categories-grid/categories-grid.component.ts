import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-categories-grid',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './categories-grid.component.html',
  styleUrl: './categories-grid.component.scss'
})
export class CategoriesGridComponent {

  categories = [
    {
      name: 'Angular',
      questions: 120,
      progress: 70,
      icon: '🅰️'
    },
    {
      name: 'JavaScript',
      questions: 150,
      progress: 60,
      icon: '🟨'
    },
    {
      name: 'TypeScript',
      questions: 80,
      progress: 65,
      icon: '🔷'
    },
    {
      name: 'RxJS',
      questions: 50,
      progress: 40,
      icon: '🟣'
    },
    {
      name: 'HTML/CSS',
      questions: 60,
      progress: 55,
      icon: '🎨'
    },
    {
      name: 'Git',
      questions: 40,
      progress: 45,
      icon: '📦'
    }
  ];
}