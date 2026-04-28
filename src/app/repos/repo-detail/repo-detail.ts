import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repository } from '../repo';
import { LoadingStatus } from '../../shared/loading-status';
import { UserService } from '../../users/user.service';
import { User } from '../../users/user';
import { switchMap, of } from 'rxjs';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.html',
  styleUrl: './repo-detail.css',
  standalone: false,
})
export class RepoDetail implements OnInit {
  private repoService = inject(RepoService);
  private userService = inject(UserService);
  private cdRef = inject(ChangeDetectorRef);

  @Input() id!: string;
  
  repo?: Repository;
  owner?: User;
  fetchStatus = LoadingStatus.INITIAL;

  ngOnInit(): void {
    if (this.id) {
      this.fetchStatus = LoadingStatus.LOADING;
      this.repoService.getRepositoryById(Number(this.id)).pipe(
        switchMap(repo => {
          this.repo = repo;
          if (repo) {
            return this.userService.getUserById(repo.ownerId);
          }
          return of(undefined);
        })
      ).subscribe({
        next: (owner) => {
          this.owner = owner;
          this.fetchStatus = LoadingStatus.SUCCESS;
          this.cdRef.detectChanges();
        },
        error: () => {
          this.fetchStatus = LoadingStatus.ERROR;
          this.cdRef.detectChanges();
        }
      });
    }
  }
}


