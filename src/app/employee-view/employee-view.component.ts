import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {

  constructor(private api:ApiService)
  {
    api.EmployeeView().subscribe(

      (response:any)=>
      {
        this.employee=response;
      }
    )
  }

  employee:any=[]

}
