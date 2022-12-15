import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile-view',
  templateUrl: './employee-profile-view.component.html',
  styleUrls: ['./employee-profile-view.component.css']
})
export class EmployeeProfileViewComponent {

  userId:any=""
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    let data:any={"id":this.userId}
    this.api.EmployeeProfileView(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response;
      }
    )
  }
  data:any=[]


}