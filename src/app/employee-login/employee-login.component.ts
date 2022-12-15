import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  constructor(private api:ApiService,private route:Router){}

  username=""
  password=""

  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    this.api.EmployeeLogin(data).subscribe(
      (response:any)=>
      {
        if (response.status=="success")
      {
        alert("Employee login successfully")
       
        this.username=""
        this.password=""
       
      }
      else{
        alert("Invalid Credential")
      }
       
      }
    )
    
    
  }
}
