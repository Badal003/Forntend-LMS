import { Leave } from 'src/app/class/leave';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applyleave } from '../class/applyleave';
import { Leavetype } from '../class/leavetype';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient) { }

  
  public AddLeavetypeFromRemote(leavetype:Leavetype):Observable<any>{
    return this.http.post("http://localhost:8090/addleavetype",leavetype)
   }
  
  public FindLeavetypeFromRemote(leavetype:Leavetype):Observable<any>{
    return this.http.post("http://localhost:8090/findleavetype",leavetype);
  }   

  public DisplaysLeavetypes(leavetype:Leavetype):Observable<any>{
    return this.http.post("http://localhost:8090/displayallleavetype",leavetype);
  }

  public UpdateLeavetypeFromRemote(leavetype:Leavetype):Observable<any>{
    return this.http.post("http://localhost:8090/updateleavetype",leavetype);
  }

  public DeleteLeavetypeFromRemote(leavetype:Leavetype):Observable<any>{
    return this.http.post("http://localhost:8090/deleteleavetype",leavetype);
  }

  public CountLeavetypeFromRemote(leavetype:Leavetype):Observable<any>{
    return this.http.post("http://localhost:8090/dashboard",leavetype);
  }

  public ApplyLeaveFromremote(applyleave:Applyleave):Observable<any>{
    return this.http.post("http://localhost:8090/addleave",applyleave);
  }

  public UpdateLeaveFromremote(applyleave:Applyleave):Observable<any>{
    return this.http.post("http://localhost:8090/applyleave",applyleave);
  }

  public EmployeeLeaveFromRemote(applyleave:Applyleave):Observable<any>{
    return this.http.post("http://localhost:8090/leaveofemployee",applyleave);
  }

  public FindEmployeeLeaveByDepartment(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:8090/findemployeeleavebydepartment",employee);
  }

  public FindLeaveByDepartment(applyleave:Applyleave):Observable<any>{
    return this.http.post("http://localhost:8090/findleavebydepartment",applyleave)
  }

  public CountLeave(applyleave:Applyleave):Observable<any>{
    return this.http.post("http://localhost:8090/countpendingleave",applyleave)
  }

  public FindLeaveByIdFromRemote(applyleave:Applyleave):Observable<any>{
    return this.http.post("http://localhost:8090/findleavebyid",applyleave);
  }
}
