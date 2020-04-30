import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const API_ENDPOINT = `${environment.HOST}${environment.API_PREFIX}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.HOST}/auth/login`, { username, password }, { observe: 'response' });
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/users`);
  }

  saveUser(user): Observable<any> {
    return this.http.post<any>(`${API_ENDPOINT}/users`, user);
  }

  updateUser(user): Observable<any> {
    return this.http.put<any>(`${API_ENDPOINT}/users/${user.id}`, user);
  }

  getUser(id): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/users/${id}`);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete<any>(`${API_ENDPOINT}/users/${id}`);
  }
}
