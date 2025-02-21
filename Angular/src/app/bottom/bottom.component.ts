import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImpurePipe } from '../pipes/impure.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom',
  imports: [FormsModule,ImpurePipe,CommonModule],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.css'
})
export class BottomComponent {
search='';
fruits=['Apple','banana','chickoo'];

update()
{
  this.fruits.push('Apricot');
}
}
