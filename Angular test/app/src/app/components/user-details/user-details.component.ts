import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User, Userlist } from '../../interfaces/users';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
  user: any;
  isLoading = true;
  
  constructor(private userService: UserService, private route: ActivatedRoute,private location: Location) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    const userId = this.route.snapshot.params['id'];
    this.fetchUserDetails(userId);
  }

  fetchUserDetails(id: number): void {
    this.userService.getUserById(id).subscribe({
      next: response => {
        this.user = response.data;
        console.log(this.user);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  
  goBack(): void {
    this.location.back();
  }
  
}
