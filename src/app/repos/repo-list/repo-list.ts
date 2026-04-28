import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repository } from '../repo';
import { LoadingStatus } from '../../shared/loading-status';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.html',
  styleUrl: './repo-list.css',
  standalone: false,
})
export class RepoList implements OnInit {
  private repoService = inject(RepoService);
  private cdRef = inject(ChangeDetectorRef);

  repos: Repository[] = [];
  fetchStatus = LoadingStatus.INITIAL;

  ngOnInit(): void {
    this.fetchStatus = LoadingStatus.LOADING;
    this.repoService.getRepositories().subscribe({
      next: (repos) => {
        this.repos = repos;
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
