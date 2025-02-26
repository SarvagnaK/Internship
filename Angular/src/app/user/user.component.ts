import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  http=inject(HttpClient);
  userList: any[] = []; 
  constructor(){
    this.getUsers();
  }
  getUsers()
  {
    this.http.get("/api/Complaint/GetAllUsers").subscribe((res:any)=>{
      this.userList=res.data;
    })
  }

  closeSidePanel()
  {
    console.log("hi");
    
  }
  openSidePanel()
  {
    console.log("opened ");
    
  }
}
