import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leavetype } from 'src/app/class/leavetype';
import { LeaveService } from 'src/app/services/leave.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-manageleavetype',
  templateUrl: './manageleavetype.component.html',
  styleUrls: ['./manageleavetype.component.css']
})
export class ManageleavetypeComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService) { }
  isSideMenuActive=true
  leavetype=new Leavetype()
  leavetypes:any
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    localStorage.removeItem("leavetypeId");
    this.leaveService.DisplaysLeavetypes(this.leavetype).subscribe(
      data=>{
        [this.leavetypes=data]
      },
      error=>{
          console.log("data not fetch!!!!!!!!!!")
      }
    )
  }
  onClickEdit(id:Number)
  {
    localStorage.setItem("leavetypeId",id.toString());
    //console.log("Department Id"+id)
    this.router.navigate(['/upadateLeaveType'])
  }
  onClickDelete(id:number)
  {
    localStorage.setItem("leavetypeId",id.toString());
    console.log("Leave-type Id"+id)
    //this.router.navigate(['/upadateDepartment'])
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Leave-Type!",
      icon: "warning",
      buttons:{cancel:true,ok:true},
      dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        this.leavetype.setId(id)
        this.leaveService.DeleteLeavetypeFromRemote(this.leavetype).subscribe(
          data=>{[
            swal("Leave-Type deleted successfully!", {
              icon: "success",
            }),window.location.reload()]
          },
          error=>{
            {return[
              [swal({
                title:"Not Deleted!",
                text:"Leave-Type not Deleted",
                icon:"error"})],
              console.log("not Deleted!!!!!!!!")
            ];}
          }  
        )
        
      } else {
        swal("Your are not Delete Leave-Type!");
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
