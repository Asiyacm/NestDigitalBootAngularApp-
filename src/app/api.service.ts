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

  SecurityAdd=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/sAdd",dataToSend)
  }



}
