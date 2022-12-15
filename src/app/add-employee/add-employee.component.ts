import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empCode=""
  name=""
  emailId=""
  designation=""
  salary=""
  address=""
  mobile=""
  username=""
  password=""
  cPassword=""

  constructor(private api:ApiService){}


  readValue=()=>
 {
  let data:any=
  {
    "empCode":this.empCode, "name":this.name, "emailId":this.emailId ,"designation":this.designation, "salary":this.salary,
    "address":this.address,"mobile":this.mobile,"username":this.username, "password":this.password, "cPassword":this.cPassword
  }
  console.log(data)
this.api.EmployeeAdd(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success")
      {
        alert("Employee added successfully")
        this.empCode=""
        this.name=""
        this.emailId=""
        this.designation=""
        this.salary=""
        this.address=""
        this.mobile=""
        this.username=""
        this.password=""
        this.cPassword=""
      }
      else{
        alert("Something went wrong")
      }
    }
  )
}

}