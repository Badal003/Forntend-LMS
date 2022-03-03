import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddepartmentComponent } from './admin/adddepartment/adddepartment.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
import { EmployeemainComponent } from './employee/employeemain/employeemain.component';
import { LoginComponent } from './user-auth/login/login.component';




const routes: Routes = [
  { 
    path:'employee',
    component:EmployeemainComponent,
    pathMatch:'full'
  },
  { 
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  
  { 
    path:'admin',
    component:AdminmainComponent,
    pathMatch:'full',
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
