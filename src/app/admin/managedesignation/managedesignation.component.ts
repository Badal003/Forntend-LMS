import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from 'src/app/class/designation';
import { DesignationService } from 'src/app/services/designation.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-managedesignation',
  templateUrl: './managedesignation.component.html',
  styleUrls: ['./managedesignation.component.css']
})
export class ManagedesignationComponent implements OnInit {

  
  constructor(private router:Router,private designationService:DesignationService) {   
  }
  isSideMenuActive=true
  designation=new Designation()
  designations:any
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    localStorage.removeItem("designId");
    this.designationService.DisplaysDesignations(this.designation).subscribe(
      data=>{
        [this.designations=data
        ,console.log(data)]
      },
      error=>{
          console.log("data not fetch!!!!!!!!!!")
      }
    )
  }
  onClickEdit(id:number)
  {
    localStorage.setItem("designId",id.toString());
    //console.log("Department Id"+id)
    this.router.navigate(['/upadateDesignation'])
  }

  onClickDelete(id:number)
  {
    localStorage.setItem("designId",id.toString());
    console.log("Designation Id"+id)
    //this.router.navigate(['/upadateDepartment'])
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Designation!",
      icon: "warning",
      buttons:{cancel:true,ok:true},
      dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        this.designation.setId(id)
        this.designationService.DeleteDesignationFromRemote(this.designation).subscribe(
          data=>{[
            swal("Designation deleted successfully!", {
              icon: "success",
            }),window.location.reload()]
          },
          error=>{
            {return[
              [swal({
                title:"Not Deleted!",
                text:"Designation not Deleted",
                icon:"error"})],
              console.log("not Deleted!!!!!!!!")
            ];}
          }  
        )
        
      } else {
        swal("Your are not Delete Designation!");
      }
    });
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
