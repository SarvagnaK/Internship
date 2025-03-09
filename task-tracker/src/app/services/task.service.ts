import { Injectable } from '@angular/core';
import { Task } from '../models/task';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private taskSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.taskSubject.asObservable();

  constructor() {
    this.loadTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.taskSubject.next([...this.tasks]);
  }
  updateTask(updatedTask: Task) {
    this.tasks = this.tasks.map(task => 
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );
    this.saveTasks();
  }

  private loadTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      this.taskSubject.next([...this.tasks]);
    }
  }

  addTask(title: string, important: boolean, dueDate?: string): void {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      important,
      dueDate,
    };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  toggleComplete(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
    }
  }

  toggleImportant(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.important = !task.important;
      this.saveTasks();
    }
  }

  searchTasks(query: string): void {
    const filteredTasks = this.tasks.filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
    this.taskSubject.next(filteredTasks);
  }
}
