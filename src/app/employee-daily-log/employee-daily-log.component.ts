import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-daily-log',
  templateUrl: './employee-daily-log.component.html',
  styleUrls: ['./employee-daily-log.component.css']
})
export class EmployeeDailyLogComponent {

  constructor(private api:ApiService){
    api.viewEmployeeLog().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  date=""
  searchData:any=[]
  readValue=()=>
  {
    let data:any={"date":this.date}
    console.log(data)
    this.api.viewDailyEmployeeLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0)
        {
          alert("Invalid")
        }
        else{
          this.data=[];
          this.searchData=response
        }
      }
    )

  }
  data:any=[]

}
