import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applyleave } from 'src/app/class/applyleave';
import { Employeemodule } from 'src/app/class/employeemodule';
import { Templeave } from 'src/app/class/templeave';
import { EmployeeService } from 'src/app/services/employee.service';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private employeeService:EmployeeService,private leaveService:LeaveService) { }
  employeemodule=new Employeemodule()
  applyleave=new Applyleave()
  templeave=new Templeave()
  templeaves:any
  count:number | undefined
  isSideBarActive=true
  ngOnInit(): void {
    localStorage.removeItem("leaveId")
    this.employeemodule.setId(Number(localStorage.getItem("employeeId")))
    this.employeeService.FindEmployeeFromRemote(this.employeemodule).subscribe(
      data=>{
        this.employeemodule=data
      }
    )
    this.applyleave.status=0
    this.applyleave.employeeId=Number(localStorage.getItem("employeeId"))
    console.log(this.applyleave.employeeId)
    console.log(this.applyleave.status)
    this.leaveService.CountLeave(this.applyleave).subscribe(
      data=>{
        this.count=data
      }
    )
    console.log("New",this.applyleave.employeeId)
    console.log("new",this.applyleave.status)
    this.leaveService.FindLeaveByDepartment(this.applyleave).subscribe(
      data=>{
        this.templeaves=data
        console.log(data)
      }
    )
  }
  onClickLeave(id:number)
  {
    localStorage.setItem("leaveId",id.toString())
    this.router.navigate(["/leavedetail"])
  }



  onSidebarClick(){
    //document.getElementById('').classList.add("active");
    var element:any = document.getElementById("sidebar");
    if(this.isSideBarActive) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
    this.isSideBarActive = !this.isSideBarActive;
  }

  onclickLogOut()
  {
    localStorage.removeItem("employeeId")
    this.router.navigate(["/login"])
  }
}
