import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applyleave } from 'src/app/class/applyleave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-managerdashboard',
  templateUrl: './managerdashboard.component.html',
  styleUrls: ['./managerdashboard.component.css']
})
export class ManagerdashboardComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService) { }
  isSideMenuActive=true
  applyleave=new Applyleave()
  totalleave:any
  approved: any
  notapproved:any
  pending: any
  totalemployee:any
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.applyleave.managerId=Number(localStorage.getItem("employeeId"))
    this.leaveService.CountLeaveByManager(this.applyleave).subscribe(
      data => {
        this.totalleave=data.totalleave
        this.approved=data.approved
        this.notapproved=data.notapproved
        this.pending=data.pending
        this.totalemployee=data.totalemployee
      }
    )
  }
  //Leave Manage Menu show and hide
  onSidemenuClickLeaveManage(){
    var element:any = document.getElementById("sidemenuLeaveManage");
    if(this.isSideMenuActive) {
      element.className+=" active"; 
    } else {
      element.classList.toggle('active');
    }
    this.isSideMenuActive = !this.isSideMenuActive;
  }
  //Open DashBoard form
  onOpenDeshBoard()
  { 
    this.router.navigate(["/managermain"]);
  }

  //Open All Leave form
  onOpenAllLeave()
  { 
    this.router.navigate(["/allleave"]);
  }
  //Open Pending Leave form
  onOpenPendingLeave()
  { 
    this.router.navigate(["/pendingleave"]);
  }
  //Open Approve Leave form
  onOpenApproveLeave()
  { 
    this.router.navigate(["/approveleave"]);
  }
  //Open Not Approve Leave form
  onOpenNotApproveLeave()
  { 
    this.router.navigate(["/notapproveleave"]);
  }   
  //Open Report form
  onOpenReport()
  { 
    this.router.navigate(["/report"]);
  } 
}
