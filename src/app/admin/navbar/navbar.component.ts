import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isSideBarActive=true
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
}
