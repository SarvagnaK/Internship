import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LifeCycle';

  private num:number=234;
  secondval: number=1111;
  numbers: number[]=[];
  isVisible:boolean=true;

  setVisibility()
  {
    this.isVisible=!this.isVisible;
  }
  get counter()
  {
    return this.num;
  }
  set counter(val:number)
  {
    this.num=val;
  }
  increment()
  {
    this.counter++;
  }
  decrement()
  {
    this.counter--;
  }
  add()
  {
    // this.numbers.push(1); 
    this.numbers=[...this.numbers,1]; // 
  }
}
