import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'https://lumin-tasks.azurewebsites.net/api/v1/blocks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiURL, task);
  }

  completeTask(taskId: number): Observable<any> {
    const url = `${this.apiURL}/completeBlock/${taskId}`;
    return this.http.put(url, {});
  }

  deleteTask(taskId: number): Observable<any> {
    const url = `${this.apiURL}/${taskId}`;
    return this.http.delete(url);
  }
}
