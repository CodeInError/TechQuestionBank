import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ToastModule,
    ConfirmDialogModule,
    CommonModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showDropdown = false;

  currentUser: any = {};

  role = 'user';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    
    this.currentUser = JSON.parse(
      localStorage.getItem('currentUser') || '{}'
    );

    console.log('test currentUser', this.currentUser);

    this.role =
      this.currentUser?.role || 'user';
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {

    this.confirmationService.confirm({

      header: 'Logout Confirmation',

      message: 'Are you sure you want to logout?',

      acceptLabel: 'Yes',

      rejectLabel: 'No',

      acceptButtonStyleClass: 'p-button-danger',

      rejectButtonStyleClass: 'p-button-text',

      accept: () => {

        localStorage.removeItem('currentUser');
        localStorage.removeItem('userRole');
        localStorage.removeItem('isLoggedIn');

        this.messageService.add({
          severity: 'success',
          summary: 'Logout',
          detail: 'Logout successful'
        });

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1000);

      },

      reject: () => {

        this.messageService.add({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Logout cancelled'
        });

      }

    });
  }
}