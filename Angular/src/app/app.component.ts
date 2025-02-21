import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeBasicComponent } from './pipe-basic/pipe-basic.component';
import { AdminComponent } from './admin/admin.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormComponent,PipeBasicComponent,RouterOutlet,RouterLink,AdminComponent,TopComponent,BottomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '19-2-2025';
}
