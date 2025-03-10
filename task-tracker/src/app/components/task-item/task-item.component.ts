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
    this.task.completed = !this.task.completed; 
    this.taskService.updateTask(this.task);
  }

  toggleImportant() {
    this.task.important=!this.task.important;
    this.taskService.updateTask(this.task);
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}
