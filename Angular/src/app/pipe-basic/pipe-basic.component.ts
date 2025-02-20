import { JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../pipes/na.pipe';

@Component({
  selector: 'app-pipe-basic',
  imports: [NgFor,UpperCasePipe,LowerCasePipe,JsonPipe,NaPipe],
  templateUrl: './pipe-basic.component.html',
  styleUrl: './pipe-basic.component.css'
})
export class PipeBasicComponent {
coursename: string ="ANgular";

cityList: string[]= ["pune","mumbai","rajkot"];

studentObj: any={
  name:'sarvagna',
  city:'gandhinagar',
  mobile:'9664751051'
}
EmpArray: any[]=[
  {empId:100,city:'',},
  {empId:101,name:'AAA',city:'Mumbai'},
  {empID:102,name:'',city:'Rajkot'}
]
}
