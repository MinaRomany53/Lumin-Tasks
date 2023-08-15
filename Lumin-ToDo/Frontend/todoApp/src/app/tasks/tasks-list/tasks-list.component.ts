import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  @Input() tasks: any[] = [];
  @Output() loadTasks: any = new EventEmitter<any>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  completeTask(taskId: number): void {
    this.taskService.completeTask(taskId).subscribe(() => {
      this.loadTasks.emit();
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.loadTasks.emit();
    });
  }
}
