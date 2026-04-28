import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
  standalone: false,
})
export class UserDetail {
  @Input() user!: User;
  @Output() onClose = new EventEmitter<void>();
}
