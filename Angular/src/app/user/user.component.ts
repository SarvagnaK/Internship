import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  http=inject(HttpClient); // Dependency Injection
  userList: any[] = []; 
  userObj: any= {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": new Date()
  }

  constructor(){
    this.getUsers();
  }
  getUsers()
  {
    this.http.get("/api/Complaint/GetAllUsers").subscribe((res:any)=>{
      this.userList=res.data;
    })
  }

  onSaveUser(){
    debugger;
    this.http.post("/api/Complaint/AddNewUser",this.userObj).subscribe((res:any)=>{
      debugger;
      this.getUsers();
    })
  }
  onEdit(data:any)
  {
    this.userObj=data;
  }
  onUpdate()
  {
    this.http.post("/api/Complaint/UpdateUser",this.userObj).subscribe((res:any)=>{
      // debugger;
      this.getUsers();
    })
  }
  onDeleteUser(id:number){
    this.http.delete("/api/Complaint/DeleteUserByUserId?userId="+id).subscribe((res:any)=>{
      debugger;
      this.getUsers();
    })
  }
}
