import { Routes } from '@angular/router';
import { UserList } from './users/user-list/user-list';
import { RepoList } from './repos/repo-list/repo-list';

export const routes: Routes = [
    {
        path: 'users',
        component: UserList,
    },
    {
        path: 'repos',
        component: RepoList,
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];

