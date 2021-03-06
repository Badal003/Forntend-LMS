import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddepartmentComponent } from './admin/adddepartment/adddepartment.component';
import { AdddesignationComponent } from './admin/adddesignation/adddesignation.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { AddleavetypeComponent } from './admin/addleavetype/addleavetype.component';
import { AdduserComponent } from './admin/adduser/adduser.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';

import { ManagedepartmentComponent } from './admin/managedepartment/managedepartment.component';
import { ManagedesignationComponent } from './admin/managedesignation/managedesignation.component';
import { ManageemployeeComponent } from './admin/manageemployee/manageemployee.component';
import { ManageleavetypeComponent } from './admin/manageleavetype/manageleavetype.component';
import { ManageuserComponent } from './admin/manageuser/manageuser.component';

import { ReportComponent } from './admin/report/report.component';
import { UpdatedepartmentComponent } from './admin/updatedepartment/updatedepartment.component';
import { UpdatedesignationComponent } from './admin/updatedesignation/updatedesignation.component';
import { UpdateemployeeComponent } from './admin/updateemployee/updateemployee.component';
import { UpdateleavetypeComponent } from './admin/updateleavetype/updateleavetype.component';
import { ApplyleaveComponent } from './employee/applyleave/applyleave.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
import { LeavestatusComponent } from './employee/leavestatus/leavestatus.component';
import { UpdatepasswordComponent } from './employee/updatepassword/updatepassword.component';
import { UpdateprofileComponent } from './employee/updateprofile/updateprofile.component';
import { ManagerdashboardComponent } from './manager/managerdashboard/managerdashboard.component';
import { LoginComponent } from './user-auth/login/login.component';

import { AllleavesComponent } from './manager/allleaves/allleaves.component';
import { ApproveleaveComponent } from './manager/approveleave/approveleave.component';
import { LeavedetailsComponent } from './manager/leavedetails/leavedetails.component';
import { NotapproveleaveComponent } from './manager/notapproveleave/notapproveleave.component';
import { PendingleaveComponent } from './manager/pendingleave/pendingleave.component';
import { ForgetpasswordComponent } from './user-auth/forgetpassword/forgetpassword.component';
import { ViewleaveComponent } from './employee/viewleave/viewleave.component';


const routes: Routes = [
  { 
    path:'employee',
    component:DashboardComponent,
    pathMatch:'full'
  },
  { 
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  { 
    path:'leavestatus',
    component:LeavestatusComponent,
    pathMatch:'full',
  },
  { 
    path:'applyleave',
    component:ApplyleaveComponent,
    pathMatch:'full',
  },
  { 
    path:'updateprofile',
    component:UpdateprofileComponent,
    pathMatch:'full',
  },
  { 
    path:'updatepassword',
    component:UpdatepasswordComponent,
    pathMatch:'full',
  },
  { 
    path:'admin',
    component:AdminmainComponent,
    pathMatch:'full',
  },
  { 
    path:'adddepartment',
    component:AdddepartmentComponent,
    pathMatch:'full',
  },
  { 
    path:'adddesignation',
    component:AdddesignationComponent,
    pathMatch:'full',
  },
  { 
    path:'addemployee',
    component:AddemployeeComponent,
    pathMatch:'full',
  },
  { 
    path:'addleavetype',
    component:AddleavetypeComponent,
    pathMatch:'full',
  },
  { 
    path:'adduser',
    component:AdduserComponent,
    pathMatch:'full',
  },
  { 
    path:'allleave',
    component:AllleavesComponent,
    pathMatch:'full',
  },
  { 
    path:'approveleave',
    component:ApproveleaveComponent,
    pathMatch:'full',
  },
  { 
    path:'leavedetails',
    component:LeavedetailsComponent,
    pathMatch:'full',
  },
  { 
    path:'managedepartment',
    component:ManagedepartmentComponent,
    pathMatch:'full',
  },
  { 
    path:'managedesignation',
    component:ManagedesignationComponent,
    pathMatch:'full',
  },
  { 
    path:'manageemployee',
    component:ManageemployeeComponent,
    pathMatch:'full',
  },
  { 
    path:'manageleavetype',
    component:ManageleavetypeComponent,
    pathMatch:'full',
  },
  { 
    path:'manageuser',
    component:ManageuserComponent,
    pathMatch:'full',
  },
  { 
    path:'notapproveleave',
    component:NotapproveleaveComponent,
    pathMatch:'full',
  },
  { 
    path:'pendingleave',
    component:PendingleaveComponent,
    pathMatch:'full',
  },
  { 
    path:'report',
    component:ReportComponent,
    pathMatch:'full',
  },
  {
    path:'upadateDepartment',
    component:UpdatedepartmentComponent,
    pathMatch:'full'
  },
  {
    path:'upadateDesignation',
    component:UpdatedesignationComponent,
    pathMatch:'full'
  },
  {
    path:'upadateEmployee',
    component:UpdateemployeeComponent,
    pathMatch:'full'
  },
  {
    path:'upadateLeaveType',
    component:UpdateleavetypeComponent,
    pathMatch:'full'
  },
  {
    path:'leavedetail',
    component:LeavedetailsComponent,
    pathMatch:'full'
  },
  {
    path:'managermain',
    component:ManagerdashboardComponent,
    pathMatch:'full'
  },
  {
    path:'forgetpassword',
    component:ForgetpasswordComponent,
    pathMatch:'full'
  },
  {
    path:'viewleave',
    component:ViewleaveComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
