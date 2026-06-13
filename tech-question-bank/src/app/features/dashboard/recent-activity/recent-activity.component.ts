import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  imports: [NgFor],
  templateUrl: './recent-activity.component.html',
  styleUrl: './recent-activity.component.scss'
})
export class RecentActivityComponent {

  activities = [
    {
      title: 'What are Standalone Components?',
      time: '2h ago'
    },
    {
      title: 'Understanding RxJS Operators',
      time: '5h ago'
    },
    {
      title: 'What is Dependency Injection?',
      time: 'Yesterday'
    },
    {
      title: 'TypeScript Utility Types',
      time: '2 days ago'
    }
  ];

}