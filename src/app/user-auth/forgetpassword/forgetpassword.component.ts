import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeemodule } from 'src/app/class/employeemodule';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private router:Router,private employeeService:EmployeeService) { }
  employeemodule=new Employeemodule()
  ngOnInit(): void {
  }
  onclickSubmit()
  {
    console.log(this.employeemodule.emailId)
    this.employeeService.loginEmployeeFromRemote(this.employeemodule).subscribe(
      data=>{
        console.log(data)
        
        if(data.userroleId==1)
        {
          localStorage.setItem("employeeId",data.id)
          this.router.navigate(["/admin"])
        }
        else if(data.userroleId==2)
        {
          localStorage.setItem("employeeId",data.id)
          this.router.navigate(["/employee"])
        }
        else
        {
          localStorage.setItem("employeeId",data.id)
          this.router.navigate(["/managermain"])
        }  
      },
      error=>{return[
        [swal({
          title:"Invalid Credentials!",
          text:"Invalid username and password",
          icon:"error"})]
        
      ];

      }
    )
  }
}
