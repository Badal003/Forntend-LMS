import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserAuthModule { }
