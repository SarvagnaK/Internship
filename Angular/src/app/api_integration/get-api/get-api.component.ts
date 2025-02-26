import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

 

  //---- get api call integration -----
  constructor(private http: HttpClient )
  {
    // this.getAllUser(); // un-comment for loading directly the content of the drop-down
  }

  userList: any [] = [];
  
  productList: any[]=[];

  getAllProducts()
  {
    debugger;
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((resu:any)=>{
      debugger;
      this.productList=resu;
    })
  }


  getAllUser()
  {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList=res;
    })
  }
  
  

}
