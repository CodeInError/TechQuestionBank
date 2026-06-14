import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  imports: [RouterLink,
  FormsModule,ToastModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
email = '';
password = '';

constructor(
  private router: Router,
  private messageService: MessageService
) {}

login() {

  const users = JSON.parse(
    localStorage.getItem('users') || '[]'
  );

  const user = users.find(
    (u: any) =>
      u.email === this.email &&
      u.password === this.password
  );

  if (user) {

    localStorage.setItem(
      'currentUser',
      JSON.stringify(user)
    );

    localStorage.setItem(
      'isLoggedIn',
      'true'
    );

    this.messageService.add({
      severity: 'success',
      summary: 'Welcome',
      detail: 'Login successful'
    });

    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 1000);

  } else {

    this.messageService.add({
    severity: 'error',
    summary: 'Login Failed',
    detail: 'Invalid email or password'
});

  }

}

}
