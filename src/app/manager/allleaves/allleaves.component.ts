import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/class/employee';
import { Templeave } from 'src/app/class/templeave';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-allleaves',
  templateUrl: './allleaves.component.html',
  styleUrls: ['./allleaves.component.css']
})
export class AllleavesComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService) { }
  templeave=new Templeave()
  employee=new Employee()
  templeaves:any
  isSideMenuActive=true
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.employee.setId(Number(localStorage.getItem("employeeId")))
    console.log(this.employee.employeeId)
    this.leaveService.FindEmployeeLeaveByDepartment(this.employee).subscribe(
      data=>{
        this.templeaves=data,
        console.log(data)
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
