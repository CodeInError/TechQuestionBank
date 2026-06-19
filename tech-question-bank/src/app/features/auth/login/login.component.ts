import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../../core/services/auth.service';
import { ADMIN_USERS } from '../../../core/constants/admin-users';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  login() {

    if (!this.email || !this.password) {

      this.messageService.add({
        severity: 'warn',
        summary: 'Validation',
        detail: 'Please enter email and password'
      });

      return;
    }

    this.authService
      .login(
        this.email,
        this.password
      )
      .then((result) => {

  const email =
    result.user.email?.toLowerCase() || '';

  const role =
    ADMIN_USERS.includes(email)
      ? 'admin'
      : 'user';

  localStorage.setItem(
    'currentUser',
    JSON.stringify({
      uid: result.user.uid,
      name: result.user.displayName,
      email: result.user.email,
      photoURL: result.user.photoURL,
      role: role
    })
  );

  localStorage.setItem(
    'userRole',
    role
  );

  this.messageService.add({
    severity: 'success',
    summary: 'Welcome',
    detail: 'Login Successful'
  });

  setTimeout(() => {
    this.router.navigate(['/dashboard']);
  }, 1000);

})
      .catch((error) => {

        this.messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: error.message
        });

      });
  }

  loginWithGoogle() {

    this.authService
      .googleLogin()
      .then((result) => {

      const email =
        result.user.email?.toLowerCase() || '';

      const role =
        ADMIN_USERS.includes(email)
          ? 'admin'
          : 'user';

      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          uid: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          role: role
        })
      );

      localStorage.setItem(
        'userRole',
        role
      );

      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Google Login Successful'
      });

  this.router.navigate(['/dashboard']);

})
      .catch((error) => {

        this.messageService.add({
          severity: 'error',
          summary: 'Google Login Failed',
          detail: error.message
        });

      });
  }
}