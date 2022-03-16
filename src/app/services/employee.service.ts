import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  public AddEmployeeFromRemote(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:8090/addemployee",employee)
   }
  
  public FindEmployeeFromRemote(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:8090/findemployee",employee);
  }   

  public DisplaysEmployees(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:8090/findallemployee",employee);
  }

  public UpdateEmployeeFromRemote(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:8090/updateemployee",employee);
  }

  public DeleteEmployeeFromRemote(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:8090/deleteemployee",employee);
  }

  public CountEmployeeFromRemote(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:8090/dashboard",employee);
  }

}
