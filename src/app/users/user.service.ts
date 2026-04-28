import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";

const GET_USERS_URL = 'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/users.json';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private http = inject(HttpClient);

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(GET_USERS_URL);
    }
}
