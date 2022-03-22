import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { ReportComponent } from './report/report.component';
import { ManagedepartmentComponent } from './managedepartment/managedepartment.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { AdddesignationComponent } from './adddesignation/adddesignation.component';
import { ManagedesignationComponent } from './managedesignation/managedesignation.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';
import { AddleavetypeComponent } from './addleavetype/addleavetype.component';
import { ManageleavetypeComponent } from './manageleavetype/manageleavetype.component';
import { AllleaveComponent } from './allleave/allleave.component';
import { PendingleaveComponent } from './pendingleave/pendingleave.component';
import { ApproveleaveComponent } from './approveleave/approveleave.component';
import { NotapproveleaveComponent } from './notapproveleave/notapproveleave.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { LeavedetailsComponent } from './leavedetails/leavedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatedepartmentComponent } from './updatedepartment/updatedepartment.component';
import { UpdatedesignationComponent } from './updatedesignation/updatedesignation.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    AdminmainComponent,
    ReportComponent,
    ManagedepartmentComponent,
    AdddepartmentComponent,
    AdddesignationComponent,
    ManagedesignationComponent,
    AddemployeeComponent,
    ManageemployeeComponent,
    AddleavetypeComponent,
    ManageleavetypeComponent,
    AllleaveComponent,
    PendingleaveComponent,
    ApproveleaveComponent,
    NotapproveleaveComponent,
    AdduserComponent,
    ManageuserComponent,
    LeavedetailsComponent,
    UpdatedepartmentComponent,
    UpdatedesignationComponent,
    UpdateemployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
