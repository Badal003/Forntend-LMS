import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeemodule } from 'src/app/class/employeemodule';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private employeeService:EmployeeService) { }
  employeemodule=new Employeemodule()
  ngOnInit(): void {
  }
  onclickSubmit()
  {
    console.log(this.employeemodule.emailId)
    console.log(this.employeemodule.password)
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
  onClickFroget()
  {
    this.router.navigate(["/forgetpassword"])
  }
}
