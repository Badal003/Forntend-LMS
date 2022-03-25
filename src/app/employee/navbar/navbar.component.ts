import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeemodule } from 'src/app/class/employeemodule';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private employeeService:EmployeeService) { }
  employeemodule=new Employeemodule()
  private isSideBarActive = true;
  ngOnInit(): void {
    this.employeemodule.setId(Number(localStorage.getItem("employeeId")))
    this.employeeService.FindEmployeeFromRemote(this.employeemodule).subscribe(
      data=>{
        this.employeemodule=data
      }
    )
  }
  onSidebarClick(){
    //document.getElementById('').classList.add("active");
    var element:any = document.getElementById("sidebar");
    if(this.isSideBarActive) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
    this.isSideBarActive = !this.isSideBarActive;
  }

  onclickUpdateProfile()
  {
    this.router.navigate(["/updateprofile"]);
  }
  onclickUpdatePassword()
  {
    this.router.navigate(["/updatepassword"]);
  }
  onclickLogOut()
  {
    localStorage.removeItem("employeeId")
    this.router.navigate(["/login"]);
  }
}
