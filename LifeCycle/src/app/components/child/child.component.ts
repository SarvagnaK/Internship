import { CommonModule } from '@angular/common';
import { Component ,DoCheck,Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges,OnInit, DoCheck{
@Input() myCounter!:number;
@Input() ndVal!:number;
@Input() arr!: number[];

public changeLog: string[]=[];

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  
for(const prop in changes  )  {

  const change: SimpleChange = changes[prop];
  const current=JSON.stringify(change.currentValue);
  const previous=JSON.stringify(change.previousValue);
  this.changeLog.push(`ngOnChanges: ${prop}: currentVal = ${current}, previousVal = ${previous}, firstChange =${change.firstChange}`)
}
}
ngOnInit(): void {
  console.log('oninit');
  this.changeLog.push('ngOnInit');
  
} 
ngDoCheck(): void {
  console.log('ngDoCheck');
  this.changeLog.push(`ngDoCheck : ${this.arr.toString()}`)
   // at first it is called two times,
   //  one when child component is created 
   // second time when parent component updates inputs i.e. myCounter,ndVal,arr

   // after that only one time is called when we click on increment/decrement
  
}
}
