import { Component,Input } from '@angular/core';
import { TaskService } from '../../services/task.service';

import { Task } from '../../models/task';

@Component({
  selector: 'app-task-item',
  standalone:true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  toggleComplete() {
    this.taskService.updateTask({ ...this.task, important: !this.task.important });
  }

  toggleImportant() {
    this.taskService.updateTask({ ...this.task, important: !this.task.important });
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}
