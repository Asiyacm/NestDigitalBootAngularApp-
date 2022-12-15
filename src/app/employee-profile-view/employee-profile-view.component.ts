import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile-view',
  templateUrl: './employee-profile-view.component.html',
  styleUrls: ['./employee-profile-view.component.css']
})
export class EmployeeProfileViewComponent {

  empCode:any=""
Data:any=[]



constructor(private api:ApiService){
  this.empCode=localStorage.getItem("empCode")
  let Data:any={
    "empCode":this.empCode
  }
  this.api.EmployeeProfileView(Data).subscribe(
    (response:any)=>{
      console.log(response)
      this.Data=response
    }
  )
  }
  
}