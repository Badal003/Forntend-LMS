import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applyleave } from 'src/app/class/applyleave';
import { Leave } from 'src/app/class/leave';
import { Leavetype } from 'src/app/class/leavetype';
import { Templeave } from 'src/app/class/templeave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService) { }
  leaveapply=new Applyleave()
  templeaves:any
  tempLeave=new Templeave()
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.leaveapply.employeeId=Number(localStorage.getItem("employeeId"))
    this.leaveService.EmployeeLeaveFromRemote(this.leaveapply).subscribe(
      data=>{[
        this.templeaves=data,
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
