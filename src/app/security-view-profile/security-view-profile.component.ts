import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-view-profile',
  templateUrl: './security-view-profile.component.html',
  styleUrls: ['./security-view-profile.component.css']
})
export class SecurityViewProfileComponent {

  userId:any=""

  Data:any=[]

  constructor(private api:ApiService){
    this.userId=localStorage.getItem("userInfo")
    let Data:any={"id":this.userId}
    this.api.SecurityProfileView(Data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.Data=response;
      }
    )
  }

}
