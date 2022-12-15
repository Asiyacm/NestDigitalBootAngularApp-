import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-view',
  templateUrl: './security-view.component.html',
  styleUrls: ['./security-view.component.css']
})
export class SecurityViewComponent {

  constructor(private api:ApiService)
  {
    api.SecurityView().subscribe(
      (response)=>
      {
        this.security=response;
      }
    )
  }

  security:any=[]

}
