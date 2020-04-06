import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.HOST}/auth/login`, { username, password }, { observe: 'response' })
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
    }
}