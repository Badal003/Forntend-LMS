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
    this.employeeService.forgetpasswordFromRemote(this.employeemodule).subscribe(
      data=>{
        [
          swal({
            title:"Email Send",
            text:"New Password send successfully!!",
            icon:"success"})
        ]
      },
      error=>{return[
        [swal({
          title:"Invalid Email Id!",
          text:"EmilId not Register",
          icon:"error"})]
        
      ];

      }
    )
  }
  onback()
  {
    this.router.navigate(["/login"])
  }
}
