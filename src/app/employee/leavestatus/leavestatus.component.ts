import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applyleave } from 'src/app/class/applyleave';
import { Leave } from 'src/app/class/leave';
import { Leavetype } from 'src/app/class/leavetype';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService) { }
  leaveapply=new Applyleave()
  leave=new Leave()
  leavetype=new Leavetype()
  leavetypes:any
  leaveapplys:any
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.leaveapply.employeeId=Number(localStorage.getItem("employeeId"))
    console.log(this.leaveapply)
    this.leaveService.EmployeeLeaveFromRemote(this.leaveapply).subscribe(
      data=>{[
        this.leaveapplys=data,
        console.log(this.leaveapplys)
      ]}
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
