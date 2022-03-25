import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeemodule } from 'src/app/class/employeemodule';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  constructor(private router:Router,private employeeService:EmployeeService) { }
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
    this.employeeService.UpdateEmployeeFromRemote(this.employeemodule).subscribe(
      data=>{return [
        [swal({
          title: "Updated successfully",
          text: "Profile Updated successfully",
          icon: "success",
        })],
        console.log("Updated successfully.......")
      ,window.location.reload()]},
      error=>{return[
        [swal({
          title:"Not Updated!",
          text:"Profile not Updated",
          icon:"error"})],
        console.log("not Updated!!!!!!!!")
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
