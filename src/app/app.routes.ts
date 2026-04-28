import { Routes } from '@angular/router';
import { UserList } from './users/user-list/user-list';
import { RepoList } from './repos/repo-list/repo-list';
import { RepoDetail } from './repos/repo-detail/repo-detail';

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
        path: 'repos/:id',
        component: RepoDetail,
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];

