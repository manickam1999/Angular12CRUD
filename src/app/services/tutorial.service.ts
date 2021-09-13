import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}/task-list/`);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get(`${baseUrl}/task-detail/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/task-list/`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/task-detail/${id}/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/task-detail/${id}/`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}