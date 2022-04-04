import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applyleave } from 'src/app/class/applyleave';
import { Templeave } from 'src/app/class/templeave';
import { LeaveService } from 'src/app/services/leave.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-leavedetails',
  templateUrl: './leavedetails.component.html',
  styleUrls: ['./leavedetails.component.css']
})
export class LeavedetailsComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService) { }
  templeave=new Templeave()
  applyleave=new Applyleave()
  isSideMenuActive=true
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.applyleave.leaveapplyId=Number(localStorage.getItem("leaveId"))
    console.log("leave id",Number(localStorage.getItem("leaveId")))
    this.leaveService.FindLeaveByIdFromRemote(this.applyleave).subscribe(
      data=>{
        console.log(data)
        this.templeave=data
      }
    )
  }

  onClickLeave(status:number,id:number|undefined)
  {
    if(status==1)
    {
        this.applyleave.status=1
        this.applyleave.leaveapplyId=id
        this.leaveService.UpdateLeaveFromremote(this.applyleave).subscribe
        (
          data=>{return [
            [swal({
              title: "Approve",
              text: "Leave Approve successfully",
              icon: "success",
            })],
            console.log("Approve successfully.......")
          ,this.router.navigate(['/managermain'])];},
          error=>{return[
            [swal({
              title:"Error!",
              text:"Leave Status not updated",
              icon:"error"})],
            console.log("not Updated!!!!!!!!")
          ];}
        )
    }
    else
    {
        this.applyleave.status=2
        this.applyleave.leaveapplyId=id
        this.leaveService.UpdateLeaveFromremote(this.applyleave).subscribe
        (
          data=>{return [
            [swal({
              title: "Not Approve",
              text: "Leave not Approve",
              icon: "success",
            })],
            console.log("Approve successfully.......")
            ,this.router.navigate(['/managermain'])];},
          error=>{return[
            [swal({
              title:"Error",
              text:"Leave status not updated",
              icon:"error"})],
            console.log("not Updated!!!!!!!!")
          ];}
        )
    }
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
