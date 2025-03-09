import { Component,OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { SearchComponent } from '../search/search.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone:true,
  imports: [CommonModule,TaskItemComponent,FormsModule,SearchComponent,AddTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showImportantTasks = false; 
  newTaskTitle: string = '';
  newTaskDueDate?: string;
  newTaskImportant: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return; // Prevent empty tasks

    this.taskService.addTask(this.newTaskTitle, this.newTaskImportant, this.newTaskDueDate);
    
    // Reset input fields
    this.newTaskTitle = '';
    this.newTaskImportant = false;
    this.newTaskDueDate = undefined;
  }
  openAddTaskModal() {
    // Open a modal or navigate to the add task form
    console.log('Open Add Task Modal');
  }
  

  toggleImportantTasks() {
    this.showImportantTasks = !this.showImportantTasks;
  }

  get importantTasks() {
    return this.tasks.filter(task => task.important);
  }
}
