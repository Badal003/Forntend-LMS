import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/class/department';
import { Designation } from 'src/app/class/designation';
import { Employee } from 'src/app/class/employee';
import { Employeemodule } from 'src/app/class/employeemodule';
import { DepartmentService } from 'src/app/services/department.service';
import { DesignationService } from 'src/app/services/designation.service';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  constructor(private router:Router,private departmentService:DepartmentService,
    private designationService:DesignationService,private employeeService:EmployeeService) { }
  employeemodule=new Employeemodule()
  department=new Department()
  designation=new Designation()
  isSideMenuActive=true
  departments:any
  designations:any
  depart_id:any
  design_id:any
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.designationService.DisplaysDesignations(this.designation).subscribe
    (
      data=>{
        this.designations=data
      }
    )
    this.departmentService.DisplaysDepartments(this.department).subscribe(
      data=>{
        this.departments=data
      }
    )
    console.log(localStorage.getItem("empId"))
    this.employeemodule.setId(Number(localStorage.getItem("empId")))
    console.log(this.employeemodule.id)
    this.employeeService.FindEmployeeFromRemote(this.employeemodule).subscribe(
    data=>{[
        console.log(data),
        this.employeemodule=data,
    ]},
    error=>{
        console.log("Data Base connection Faild.")
    }
    )
  }

  onclickSubmit()
  {
    this.employeeService.UpdateEmployeeFromRemote(this.employeemodule).subscribe(
      data=>{return [
        [swal({
          title: "Updated successfully",
          text: "Employee Updated successfully",
          icon: "success",
        })],
        console.log("Updated successfully.......")
      ,window.location.reload()]},
      error=>{return[
        [swal({
          title:"Not Updated!",
          text:"Employee not Updated",
          icon:"error"})],
        console.log("not Updated!!!!!!!!")
      ];}
    )

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
