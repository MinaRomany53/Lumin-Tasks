import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'https://lumin-blocks.azurewebsites.net/api/v1/blocks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  completeTask(taskId: number): Observable<any> {
    const url = `${this.apiURL}/completeBlock/${taskId}`;
    return this.http.put(url, {});
  }
}
