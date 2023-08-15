import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css'],
})
export class TasksFormComponent implements OnInit {
  taskDescription: string = '';
  dueDate: string = '';

  @Output() loadTasks: any = new EventEmitter<any>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.taskDescription && this.dueDate) {
      const newTask = {
        description: this.taskDescription,
        dueDate: this.dueDate,
      };

      this.taskService.createTask(newTask).subscribe((response) => {
        console.log('New task created:', response);
        this.taskDescription = '';
        this.dueDate = '';

        this.loadTasks.emit();
      });
    }
  }
}
