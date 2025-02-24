import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterLink,NgClass,FormsModule,NgStyle],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

divBgColor:string='bg-success';
div1BgColor:string='';

isChecked: boolean=false;

addDiv1Color(className:string )
{
  this.divBgColor=className;
}
addDiv3Color(color:string)
{
  this.div1BgColor=color;
}
}
