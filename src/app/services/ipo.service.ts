import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const API_ENDPOINT = `${environment.HOST}${environment.API_PREFIX}`;

@Injectable({
  providedIn: 'root'
})
export class IPOService {

  constructor(private http: HttpClient) { }

  getIPOs(): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/ipos`);
  }

  saveIPO(ipo): Observable<any> {
    return this.http.post<any>(`${API_ENDPOINT}/ipos`, ipo);
  }

  updateIPO(ipo): Observable<any> {
    return this.http.put<any>(`${API_ENDPOINT}/ipos/${ipo.id}`, ipo);
  }

  getIPO(id): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/ipos/${id}`);
  }

  deleteIPO(id): Observable<any> {
    return this.http.delete<any>(`${API_ENDPOINT}/ipos/${id}`);
  }
}
