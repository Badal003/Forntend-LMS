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


  //Department Menu show and hide
  onSidemenuClickDepartment(){
    var element:any = document.getElementById("sidemenuDepartment");
    if(this.isSideMenuActive) {
      element.className+=" active"; 
    } else {
      element.classList.toggle('active');
    }
    this.isSideMenuActive = !this.isSideMenuActive;
  }
  //Designation Menu show and hide
  onSidemenuClickDesignation(){
    var element:any = document.getElementById("sidemenuDesignation");
    if(this.isSideMenuActive) {
      element.className+=" active"; 
    } else {
      element.classList.toggle('active');
    }
    this.isSideMenuActive = !this.isSideMenuActive;
  }
  //Employees Menu show and hide
  onSidemenuClickEmployees(){
    var element:any = document.getElementById("sidemenuEmployee");
    if(this.isSideMenuActive) {
      element.className+=" active"; 
    } else {
      element.classList.toggle('active');
    }
    this.isSideMenuActive = !this.isSideMenuActive;
  }
  //LeaveType Menu show and hide
  onSidemenuClickLeaveType(){
    var element:any = document.getElementById("sidemenuLeaveType");
    if(this.isSideMenuActive) {
      element.className+=" active"; 
    } else {
      element.classList.toggle('active');
    }
    this.isSideMenuActive = !this.isSideMenuActive;
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
  //User Menu show and hide
  onSidemenuClickUser(){
    var element:any = document.getElementById("sidemenuUser");
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
    this.router.navigate(["/admin"]);
  }
  //Open Add Department form
  onOpenAddDepatment()
  { 
    this.router.navigate(["/adddepartment"]);
  }
  //Open Manage Department form
  onOpenManageDepatment()
  { 
    this.router.navigate(["/managedepartment"]);
  }
  //Open Add Designation form
  onOpenAddDesignation()
  { 
    this.router.navigate(["/adddesignation"]);
  }
  //Open Manage Designation form
  onOpenManageDesignation()
  { 
    this.router.navigate(["/managedesignation"]);
  }
  //Open Add Employee form
  onOpenAddEmployee()
  { 
    this.router.navigate(["/addemployee"]);
  }
  //Open Manage Employee form
  onOpenManageEmployee()
  { 
    this.router.navigate(["/manageemployee"]);
  }
  //Open Add Leave Type form
  onOpenAddLeaveType()
  { 
    this.router.navigate(["/addleavetype"]);
  }
  //Open Manage Leave Type form
  onOpenManageLeaveType()
  { 
    this.router.navigate(["/manageleavetype"]);
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
  //Open Add User form
  onOpenAddUser()
  { 
    this.router.navigate(["/adduser"]);
  } 
  //Open Manage User form
  onOpenManageUser()
  { 
    this.router.navigate(["/manageuser"]);
  }
  //Open Report form
  onOpenReport()
  { 
    this.router.navigate(["/report"]);
  }

}
