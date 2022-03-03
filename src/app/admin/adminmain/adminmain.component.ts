import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {

  constructor() { }
  isSideMenuActive=true
  ngOnInit(): void {
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
  isDashborad:boolean=true
  isAddDepartment:boolean=false
  isManageDepartment:boolean=false
  isAddDesignation:boolean=false
  isManageDesignation:boolean=false
  isAddEmployee:boolean=false
  isManageEmployee:boolean=false
  isAddLeaveType:boolean=false
  isManageLeaveType:boolean=false
  isAllLeave:boolean=false
  isPendingLeave:boolean=false
  isApproveLeave:boolean=false
  isNotApproveLeave:boolean=false
  isAddUser:boolean=false
  isManageUser:boolean=false
  isReport:boolean=false

  //Open DashBoard form
  onOpenDeshBoard()
  { 
    if(this.isDashborad==false)
    {
      this.isDashborad=true
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Add Department form
  onOpenAddDepatment()
  { 
    if(this.isAddDepartment==false)
    {
      this.isDashborad=false
      this.isAddDepartment=true
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Manage Department form
  onOpenManageDepatment()
  { 
    if(this.isManageDepartment==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=true
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Add Designation form
  onOpenAddDesignation()
  { 
    if(this.isAddDesignation==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=true
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Manage Designation form
  onOpenManageDesignation()
  { 
    if(this.isManageDesignation==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=true
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Add Employee form
  onOpenAddEmployee()
  { 
    if(this.isAddEmployee==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=true
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Manage Employee form
  onOpenManageEmployee()
  { 
    if(this.isManageEmployee==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=true
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Add Leave Type form
  onOpenAddLeaveType()
  { 
    if(this.isAddLeaveType==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=true
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Manage Leave Type form
  onOpenManageLeaveType()
  { 
    if(this.isManageLeaveType==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=true
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open All Leave form
  onOpenAllLeave()
  { 
    if(this.isAllLeave==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=true
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Pending Leave form
  onOpenPendingLeave()
  { 
    if(this.isPendingLeave==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=true
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Approve Leave form
  onOpenApproveLeave()
  { 
    if(this.isApproveLeave==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=true
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Not Approve Leave form
  onOpenNotApproveLeave()
  { 
    if(this.isNotApproveLeave==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=true
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=false
    }
  }
  //Open Add User form
  onOpenAddUser()
  { 
    if(this.isAddUser==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=true
      this.isManageUser=false
      this.isReport=false
    }
  } 
  //Open Manage User form
  onOpenManageUser()
  { 
    if(this.isManageUser==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=true
      this.isReport=false
    }
  }
  //Open Report form
  onOpenReport()
  { 
    if(this.isReport==false)
    {
      this.isDashborad=false
      this.isAddDepartment=false
      this.isManageDepartment=false
      this.isAddDesignation=false
      this.isManageDesignation=false
      this.isAddEmployee=false
      this.isManageEmployee=false
      this.isAddLeaveType=false
      this.isManageLeaveType=false
      this.isAllLeave=false
      this.isPendingLeave=false
      this.isApproveLeave=false
      this.isNotApproveLeave=false
      this.isAddUser=false
      this.isManageUser=false
      this.isReport=true
    }
  } 
}
