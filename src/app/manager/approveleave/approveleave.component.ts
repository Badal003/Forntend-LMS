import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applyleave } from 'src/app/class/applyleave';
import { Templeave } from 'src/app/class/templeave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-approveleave',
  templateUrl: './approveleave.component.html',
  styleUrls: ['./approveleave.component.css']
})
export class ApproveleaveComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService) { }
  templeave=new Templeave()
  applyleave=new Applyleave()
  templeaves:any
  isSideMenuActive=true
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.applyleave.employeeId=(Number(localStorage.getItem("employeeId")))
    this.applyleave.status=1
    this.leaveService. FindLeaveByDepartment(this.applyleave).subscribe(
      data => {this.templeaves=data
      }
      )
  }

  onClickLeave(id:number)
  {
    localStorage.setItem("leaveId",id.toString())
    this.router.navigate(["/leavedetail"])
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
