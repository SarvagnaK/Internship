import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  title = '';
  important = false;
  dueDate = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.title.trim()) {
      this.taskService.addTask(this.title, this.important, this.dueDate);
      this.title = '';
      this.important = false;
      this.dueDate = '';
    }
  }
}
