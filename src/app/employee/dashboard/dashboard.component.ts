import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applyleave } from 'src/app/class/applyleave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService) { }
  
  applyleave=new Applyleave()
  totalleave:any
  approved: any
  notapproved:any
  pending: any
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
      this.router.navigate(["/login"])
    }
    this.applyleave.employeeId=Number(localStorage.getItem("employeeId"))
    this.leaveService.CountLeaveByEmployee(this.applyleave).subscribe(
      data => {
        this.totalleave=data.totalleave
        this.approved=data.approved
        this.notapproved=data.notapproved
        this.pending=data.pending
      }
    )
  }
  onclickLeavestatus()
  {
      this.router.navigate(["/leavestatus"]);
  }
  onclickLeaveApply()
  {
      this.router.navigate(["/applyleave"]);
  }
  onclickEmployeeDashboard()
  {
      this.router.navigate(["/employee"]);
  }
}
