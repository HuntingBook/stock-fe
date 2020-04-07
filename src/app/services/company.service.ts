import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const API_ENDPOINT = `${environment.HOST}${environment.API_PREFIX}`;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/companies`);
  }

  saveCompany(company): Observable<any> {
    return this.http.post<any>(`${API_ENDPOINT}/companies`, company);
  }

  updateCompany(company): Observable<any> {
    return this.http.put<any>(`${API_ENDPOINT}/companies/${company.id}`, company);
  }

  getCompany(id): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/companies/${id}`);
  }

  deleteCompany(id): Observable<any> {
    return this.http.delete<any>(`${API_ENDPOINT}/companies/${id}`);
  }
}
