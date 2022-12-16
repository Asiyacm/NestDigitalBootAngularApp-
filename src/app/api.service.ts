import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  EmployeeLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/login",dataToSend)
  }

  EmployeeAdd=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }

   EmployeeView=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }

  EmployeeProfileView=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/profile",dataToSend)
  }

  EmployeeSearch=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }

  EmployeeDelete=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataToSend)
  }

  SecurityLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/sLogin",dataToSend)
  }


  SecurityAdd=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/sAdd",dataToSend)
  }

  SecuritySearch=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/sSearch",dataToSend)
  }

  SecurityDelete=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/sDelete",dataToSend)
  }

  
  SecurityView=()=>
  {
    return this.http.get("http://localhost:8080/sView")
  }
  
  
  SecurityProfileView=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/sProfile",dataToSend)
  }


  applyLeave=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/lAdd",dataToSend)
  }


}
