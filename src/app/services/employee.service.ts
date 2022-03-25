import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../class/employee';
import { Employeemodule } from '../class/employeemodule';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  public AddEmployeeFromRemote(employeemodule:Employeemodule):Observable<any>{
    return this.http.post("http://localhost:8090/addemployee",employeemodule)
   }
  
  public FindEmployeeFromRemote(employeemodule:Employeemodule):Observable<any>{
    return this.http.post("http://localhost:8090/findemployee",employeemodule);
  }   

  public DisplaysEmployees(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:8090/findallemployee",employee);
  }

  public UpdateEmployeeFromRemote(employeemodule:Employeemodule):Observable<any>{
    return this.http.post("http://localhost:8090/updateemployee",employeemodule);
  }

  public DeleteEmployeeFromRemote(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:8090/deleteemployee",employee);
  }

  public findEmployeeByDepartmentFromRemote(employeemodule:Employeemodule):Observable<any>{
    return this.http.post("http://localhost:8090/findemployeebydepartment",employeemodule)
  }


  public UpdateEmployeeUserroleFromRemote(employeemodule:Employeemodule):Observable<any>{
    return this.http.post("http://localhost:8090/updateEmployeeByUserrole",employeemodule)
  } 

  public loginEmployeeFromRemote(employeemodule:Employeemodule):Observable<any>{
    return this.http.post("http://localhost:8090/login",employeemodule)
  }

  public CountEmployeeFromRemote(employeemodule:Employeemodule):Observable<any>{
    return this.http.post("http://localhost:8090/dashboard",employeemodule);
  }

}
