import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AllleavesComponent } from './allleaves/allleaves.component';
import { NotapproveleaveComponent } from './notapproveleave/notapproveleave.component';
import { PendingleaveComponent } from './pendingleave/pendingleave.component';
import { ApproveleaveComponent } from './approveleave/approveleave.component';
import { LeavedetailsComponent } from './leavedetails/leavedetails.component';




@NgModule({
  declarations: [
    ManagerdashboardComponent,
  
    NavbarComponent,
       AllleavesComponent,
       NotapproveleaveComponent,
       PendingleaveComponent,
       ApproveleaveComponent,
       LeavedetailsComponent,
    
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ManagerModule { }
