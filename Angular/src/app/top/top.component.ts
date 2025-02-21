import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ResultPipe } from '../pipes/result.pipe';

@Component({
  selector: 'app-top',
  imports: [FormsModule,CommonModule,ResultPipe],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
name='Sarvagna';
mark=98;
isUpdated: boolean=false;
update()
{
  if(this.isUpdated)
  {
  this.mark=33;
    this.isUpdated=!this.isUpdated;
  }
  else{
    this.mark=98;
    this.isUpdated=!this.isUpdated;
  }
}
}
