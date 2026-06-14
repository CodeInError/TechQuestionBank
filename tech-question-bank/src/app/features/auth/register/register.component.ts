import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {}

  confirmPassword = '';

  user = {
    id: '',
    name: '',
    email: '',
    password: ''
  };

  register() {

    if (this.user.password !== this.confirmPassword) {
      this.messageService.add({
      severity: 'error',
      summary: 'Registration Failed',
      detail: 'Passwords do not match'
    });
      return;
    }

    const users = JSON.parse(
      localStorage.getItem('users') || '[]'
    );

    const existingUser = users.find(
      (u: any) => u.email === this.user.email
    );

    if (existingUser) {
      this.messageService.add({
      severity: 'warn',
      summary: 'User Exists',
      detail: 'Email already registered'
    });
      return;
    }

    this.user.id = crypto.randomUUID();

    users.push(this.user);

    localStorage.setItem(
      'users',
      JSON.stringify(users)
    );

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Registration completed successfully'
    });

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }
}