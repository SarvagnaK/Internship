import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeBasicComponent } from './pipe-basic/pipe-basic.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormComponent,PipeBasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '19-2-2025';
}
