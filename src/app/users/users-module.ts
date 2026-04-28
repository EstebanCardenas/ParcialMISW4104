import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList } from './user-list/user-list';
import { UserDetail } from './user-detail/user-detail';

@NgModule({
  declarations: [UserList, UserDetail],
  imports: [CommonModule],
  exports: [UserList],
})
export class UsersModule { }
