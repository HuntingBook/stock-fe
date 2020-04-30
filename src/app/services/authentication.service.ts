import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient,
        private router: Router,
        private userService: UserService) { }

    login(username: string, password: string) {
        return this.userService.login(username, password)
            .pipe(map(response => {
                if (response && response.headers) {
                    // store jwt token in local storage to keep user logged in between page refreshes
                    const token = response.headers.get("Authorization");
                    localStorage.setItem('token', JSON.stringify(token));
                }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}