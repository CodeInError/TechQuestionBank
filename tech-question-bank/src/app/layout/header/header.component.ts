import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,
  FormsModule,ToastModule,ConfirmDialogModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showDropdown = false;

  currentUser: any = {};

  constructor(private router: Router,private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {

    this.currentUser = JSON.parse(
      localStorage.getItem('currentUser') || '{}'
    );

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
      localStorage.removeItem('isLoggedIn');
      
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
      this.messageService.add({
        severity: 'success',
        summary: 'Logout',
        detail: 'Logout successful'
      });
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