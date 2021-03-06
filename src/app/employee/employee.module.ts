import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { EmployeemainComponent } from './employeemain/employeemain.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { TempComponent } from './temp/temp.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';




@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ApplyleaveComponent,
    LeavestatusComponent,
    UpdateprofileComponent,
    EmployeemainComponent,
    UpdatepasswordComponent,
    TempComponent,
    ViewleaveComponent,

  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class EmployeeModule { }
