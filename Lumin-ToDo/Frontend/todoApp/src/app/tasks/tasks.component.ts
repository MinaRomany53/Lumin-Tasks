import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  isLoading: boolean = false;
  isError: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.isLoading = true;
    this.taskService.getTasks().subscribe(
      (response) => {
        this.tasks = response;
        this.isLoading = false; // Data fetched, set isLoading to false
        this.isError = true;
      },
      (error) => {
        console.error(error);
        this.isLoading = false; // Handle error, set isLoading to false
        this.isError = true;
      }
    );
  }

  onAnyAction(): void {
    this.loadTasks();
  }
}
