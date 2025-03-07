import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuery = new BehaviorSubject<string>(''); // Default empty
  searchQuery$ = this.searchQuery.asObservable(); // Observable for components

  setSearchQuery(query: string) {
    this.searchQuery.next(query);
  }
}
