import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../../core/services/auth.service';

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
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  user = {
    id: '',
    name: '',
    email: '',
    password: ''
  };

 register() {

  console.log(this.user);

  if (!this.user.name ||!this.user.email ||!this.user.password) {

    this.messageService.add({
      severity: 'warn',
      summary: 'Validation',
      detail: 'Please fill all fields'
    });

    return;
  }

  if (this.user.password !== this.confirmPassword ) {

    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Passwords do not match'
    });

    return;
  }

  this.authService.register(this.user.name,this.user.email,this.user.password)
    .then((result) => {
      this.user = {
        id: '',
        name: '',
        email: '',
        password: ''
      };

      this.confirmPassword = '';

      this.messageService.add({
        severity: 'success',
        summary: 'Registration Successful',
        detail: 'Account created successfully. Please login.'
      });

  setTimeout(() => {
    this.router.navigate(['/login']);
  }, 2000);

})
    .catch((error) => {

  let message = 'Registration Failed';
  switch (error.code) {
    case 'auth/email-already-in-use':
      message = 'Email already registered';
      break;
    case 'auth/weak-password':
      message = 'Password should be at least 6 characters';
      break;
    case 'auth/invalid-email':
      message = 'Invalid email address';
      break;
  }

  this.messageService.add({
    severity: 'error',
    summary: 'Registration Failed',
    detail: message
  });

});
}
}