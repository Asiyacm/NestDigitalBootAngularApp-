import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {

  constructor(private api:ApiService){}

  empCode=""
  searchData:any=[]

  readValue=()=>
  {
    let data={
      "empCode":this.empCode
  }
  console.log(data)
  this.api.EmployeeSearch(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("Invalid employee code")
        
      } else {
        this.searchData=response
        
      }
    }
  )
  }

  deleteBtnClick=(id:any)=>
  {
    let data:any={
      "id": id
  }
  this.api.EmployeeDelete(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
        alert("Deleted succesfully")
        this.searchData=[]
        
        
      }
    }
  )
  }

}