import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-search',
  templateUrl: './security-search.component.html',
  styleUrls: ['./security-search.component.css']
})
export class SecuritySearchComponent {

  constructor(private api:ApiService){}

  empCode=""
  searchData:any=[]

  readValues=()=>
  {
    let data={
      "empCode":this.empCode
  }
  console.log(data)
  this.api.SecuritySearch(data).subscribe(
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

  readValue=(id:any)=>
  {
    let data:any={
      "id": id
  }
  this.api.SecurityDelete(data).subscribe(
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
