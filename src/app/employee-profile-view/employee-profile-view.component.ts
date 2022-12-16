import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile-view',
  templateUrl: './employee-profile-view.component.html',
  styleUrls: ['./employee-profile-view.component.css']
})
export class EmployeeProfileViewComponent {

  userId:any=""
  Data:any=[]
  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    let Data:any={"id":this.userId}
    this.api.EmployeeProfileView(Data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.Data=response;
      }
    )
  }


}