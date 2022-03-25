import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

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
