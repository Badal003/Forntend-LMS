import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applyleave } from 'src/app/class/applyleave';
import { Leavetype } from 'src/app/class/leavetype';
import { Templeave } from 'src/app/class/templeave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.css']
})
export class ViewleaveComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService) { }
  leavetype=new Leavetype()
  applyleave=new Applyleave()
  templeave=new Templeave()
  leavetypes:any
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.applyleave.leaveapplyId=Number(localStorage.getItem("leaveId"))
    console.log("leave id",Number(localStorage.getItem("leaveId")))
    this.leaveService.FindLeaveByIdFromRemote(this.applyleave).subscribe(
      data=>{
        console.log(data)
        this.templeave=data
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
