import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm = '';
  searchSubject = new Subject<string>();

  constructor(private taskService: TaskService) {
    this.searchSubject.pipe(debounceTime(300)).subscribe(query => {
      this.taskService.searchTasks(query);
    });
  }

  onSearchChange() {
    this.searchSubject.next(this.searchTerm);
  }
}
