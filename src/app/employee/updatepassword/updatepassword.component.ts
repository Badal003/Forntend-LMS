import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeemodule } from 'src/app/class/employeemodule';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  constructor(private router:Router,private employeeService:EmployeeService) { }
  oldpassword:any
  newpassword:any
  confirmpassword:any
  employeemodule=new Employeemodule()
  ngOnInit(): void {
    if(localStorage.getItem("employeeId")==null)
    {
        this.router.navigate(["/login"])
    }
    this.employeemodule.setId(Number(localStorage.getItem("employeeId")))
    console.log(this.employeemodule.id)
    this.employeeService.FindEmployeeFromRemote(this.employeemodule).subscribe(
      data=>{[
          console.log(data),
          this.employeemodule=data,
      ]}
    )
  }
  onclickSubmit()
  {
    console.log(this.oldpassword)
    console.log(this.employeemodule.password)
    if(this.employeemodule.password==this.oldpassword)
    {
      if(this.confirmpassword==this.newpassword)
      {
        this.employeemodule.password=this.newpassword
        this.employeeService.UpdatePasswordFromRemote(this.employeemodule).subscribe(
          data=>{[
            swal({
              title: "Updated password successfully",
              text: "Password changed successfully",
              icon: "success",
            })
          ]},
          error=>{[
            swal({
              title:"Not updated!",
              text:"Password not changed successfully!!",
              icon:"error"})
          ]}
        )
      }
      else
      {
        swal({
          title:"Passwords Not Match!",
          text:"New password and Confirm password are not match!!",
          icon:"error"})
      }  
    }
    else
    {
      swal({
        title:"Old Password Not Match!",
        text:"Old password is not match",
        icon:"error"})
    }
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
