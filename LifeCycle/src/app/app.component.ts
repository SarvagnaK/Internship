import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LifeCycle';

  private num:number=234;
  secondval: number=1111;
  numbers: number[]=[];
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
