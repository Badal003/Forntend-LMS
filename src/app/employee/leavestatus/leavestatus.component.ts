import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styleUrls: ['./leavestatus.component.css']
})
export class LeavestatusComponent implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
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
