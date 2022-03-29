import { Leavetype } from './../../class/leavetype';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from 'src/app/services/leave.service';
import { Applyleave } from 'src/app/class/applyleave';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css'], 
  providers: [DatePipe]
})
export class ApplyleaveComponent implements OnInit {

  constructor(private router:Router,private leaveService:LeaveService,private datepipe: DatePipe) { }
  leavetype=new Leavetype()
  leaveapply=new Applyleave()
  leavetypes:any
  today = new Date()
  latest_date =this.datepipe.transform(this.today, 'yyyy-MM-dd');
  ngOnInit(): void {
    
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.leaveService.DisplaysLeavetypes(this.leavetype).subscribe(
      data=>{
        this.leavetypes=data
      }
    )
    
  }
  
  lid=0
  onChange(id:any)
  {
    this.leavetype.setId(id)
    this.leaveService.FindLeavetypeFromRemote(this.leavetype).subscribe(
      data=>{
        this.lid=data.leavetypeId
      }
    )
  }

  onclickSubmit()
  {
    console.log(this.leaveapply)
    this.leaveapply.employeeId=Number(localStorage.getItem("employeeId"))
    this.leaveService.ApplyLeaveFromremote(this.leaveapply).subscribe(
      data=>{return [
        [swal({
          title: "Leave Apply successfully",
          text: "Employee Leave Apply successfully",
          icon: "success",
        })],
      
      ]},
      error=>{return[
        [swal({
          title:"Not Apply successfully!",
          text:"Employee Leave Not Apply successfully",
          icon:"error"})],
      ];}
    )
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
