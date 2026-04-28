import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Repository } from "./repo";

const GET_REPOS_URL = 'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/repositories.json';

@Injectable({
    providedIn: 'root',
})
export class RepoService {
    private http = inject(HttpClient);

    getRepositories(): Observable<Repository[]> {
        return this.http.get<Repository[]>(GET_REPOS_URL);
    }

    getRepositoryById(repoId: number): Observable<Repository | undefined> {
        return this.getRepositories().pipe(
            map(repos => repos.find(repo => repo.id === repoId))
        );
    }
}
