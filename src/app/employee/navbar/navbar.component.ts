import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  isSideBarActive = true;
  ngOnInit(): void {
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
    this.router.navigate(["/login"]);
  }
}
