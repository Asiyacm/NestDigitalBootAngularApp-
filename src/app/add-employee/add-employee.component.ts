import { Component } from '@angular/core';

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


  readValue=()=>
 {
  let data:any=
  {
    "empCode":this.empCode, "name":this.name, "emailId":this.emailId ,"designation":this.designation, "salary":this.salary,
    "address":this.address,"mobile":this.mobile,"username":this.username, "password":this.password, "cPassword":this.cPassword
  }
  console.log(data)

}

}
