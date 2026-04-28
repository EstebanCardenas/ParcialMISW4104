import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { LoadingStatus } from '../../shared/loading-status';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  standalone: false,
})
export class UserList implements OnInit {
  private userService = inject(UserService);

  users?: User[];
  fetchStatus = LoadingStatus.INITIAL;
  selectedUser?: User;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchStatus = LoadingStatus.LOADING;
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.fetchStatus = LoadingStatus.SUCCESS;
        this.cdRef.detectChanges();
      },
      error: (_) => this.fetchStatus = LoadingStatus.ERROR,
    });
  }

  setSelectedUser(user: User) {
    this.selectedUser = user;
  }

  clearSelectedUser() {
    this.selectedUser = undefined;
  }
}

