import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  term:string='';
  userList: User[] = [];
  userList1: User[]=[];
 
  total:User[]=[]
  totalUsers: number = 0; // Total number of users available from the API
  rows: number = 6; // Number of rows per page
  page: number = 0; // Current page index (0-based)

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(event?: any): void {
    const page = event ? event.page + 1 : 1; // PrimeNG page index is 0-based
    this.userService.getUsers(page).subscribe({
      next: response => {
        this.userList = response.data;
        this.totalUsers = response.total; // Set total users if available
      },
      error: err => {
        console.error('Failed to fetch users', err);
        // Optionally: display an error message to the user
      }
    });
  }

  onPageChange(event: any): void {
    this.page = event.page;
    this.fetchUsers(event);
    
    console.log('Page changed to:', this.page); // Debug
    this.applySlideLeftAnimation();
  }
  
  applySlideLeftAnimation() {
    const cards = document.querySelectorAll('.user-card');
    cards.forEach(card => {
      const element = card as HTMLElement;
      element.classList.remove('slide-left'); // Reset animation
      void element.offsetWidth; // Trigger reflow to restart the animation
      element.classList.add('slide-left');
    });
  }
  

}
