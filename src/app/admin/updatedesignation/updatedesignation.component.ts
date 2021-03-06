import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from 'src/app/class/designation';
import { DesignationService } from 'src/app/services/designation.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-updatedesignation',
  templateUrl: './updatedesignation.component.html',
  styleUrls: ['./updatedesignation.component.css']
})
export class UpdatedesignationComponent implements OnInit {

  constructor(private router:Router,private designationService:DesignationService) { }
  isSideMenuActive=true
  designation=new Designation()
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.designation.setId(Number(localStorage.getItem("designId")))
    this.designationService.FindDesignationFromRemote(this.designation).subscribe(
    data=>{[
        this.designation=data,
        console.log(data.departmentId)
    ]},
    error=>{
        console.log("Data Base connection Faild.")
    }
    )
  }

  onClickSubmit()
  {
    this.designationService.UpdateDesignationFromRemote(this.designation).subscribe(
      data=>{return [
        [swal({
          title: "Updated successfully",
          text: "Desigantion Updated successfully",
          icon: "success",
        })],
        console.log("Updated successfully.......")
        ,window.location.reload()
      ];},
      error=>{return[
        [swal({
          title:"Not Updated!",
          text:"Designation not Updated",
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
