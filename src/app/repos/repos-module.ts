import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoList } from './repo-list/repo-list';

@NgModule({
  declarations: [RepoList],
  imports: [CommonModule],
  exports: [RepoList]
})
export class ReposModule {}
