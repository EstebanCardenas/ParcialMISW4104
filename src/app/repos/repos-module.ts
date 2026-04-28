import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoList } from './repo-list/repo-list';
import { RepoDetail } from './repo-detail/repo-detail';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RepoList, RepoDetail],
  imports: [CommonModule, RouterModule],
  exports: [RepoList, RepoDetail]
})


export class ReposModule {}
