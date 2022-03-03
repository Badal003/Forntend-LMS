import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{EmployeeModule} from './employee/employee.module'
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
