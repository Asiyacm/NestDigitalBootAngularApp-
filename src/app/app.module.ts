import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeProfileViewComponent } from './employee-profile-view/employee-profile-view.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SecuritySearchComponent } from './security-search/security-search.component';
import { SecurityViewComponent } from './security-view/security-view.component';
import { SecurityViewProfileComponent } from './security-view-profile/security-view-profile.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { EmployeeDailyLogComponent } from './employee-daily-log/employee-daily-log.component';
import { EmployeeLogComponent } from './employee-log/employee-log.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { VisitorDailyLogComponent } from './visitor-daily-log/visitor-daily-log.component';
import { ViewVisitorLogComponent } from './view-visitor-log/view-visitor-log.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  
  {
    path:"employeeLogin",
    component:EmployeeLoginComponent
  },

  {
    path:"employeeAdd",
    component:AddEmployeeComponent
  },

  {
    path:"employeeSearch",
    component:EmployeeSearchComponent
  },
  
  {
    path:"employeeView",
    component:EmployeeViewComponent
  },

  {
    path:"employeeProfileView",
    component:EmployeeProfileViewComponent
  },

  {
    path:"securityLogin",
    component:SecurityLoginComponent
  },


  {
    path:"securityAdd",
    component:AddSecurityComponent
  },

  {
    path:"securitySearch",
    component:SecuritySearchComponent
  },

  {
    path:"securityView",
    component:SecurityViewComponent
  },

  {
    path:"securityProfileView",
    component:SecurityViewProfileComponent
  },

  {
    path:"applyLeave",
    component:ApplyLeaveComponent
  },

  {
    path:"employeeLog",
    component:EmployeeLogComponent
  },

  {
    path:"employeeDailyLog",
    component:EmployeeDailyLogComponent
  } ,
  {
    path:"visitorLog",
    component:VisitorLogComponent
  },

  {
    path:"visitorDailyLog",
    component:VisitorDailyLogComponent
  },

  {
    path:"viewVisitorLog",
    component:ViewVisitorLogComponent
  }



  
  
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AdminLoginComponent,
    AddSecurityComponent,
    NavigationComponent,
    EmployeeLoginComponent,
    EmployeeSearchComponent,
    EmployeeViewComponent,
    EmployeeProfileViewComponent,
    SecurityLoginComponent,
    SecuritySearchComponent,
    SecurityViewComponent,
    SecurityViewProfileComponent,
    ApplyLeaveComponent,
    EmployeeDailyLogComponent,
    EmployeeLogComponent,
    VisitorLogComponent,
    VisitorDailyLogComponent,
    ViewVisitorLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
