import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../class/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  
  public AddDepartmentFromRemote(department:Department):Observable<any>{
    return this.http.post("http://localhost:8090/adddepartment",department)
   }
  
  public FindDepartmentFromRemote(department:Department):Observable<any>{
    return this.http.post("http://localhost:8090/finddepartment",department);
  }   

  public DisplaysDepartments(department:Department):Observable<any>{
    return this.http.post("http://localhost:8090/displayalldepartment",department);
  }

  public UpdateDepartmentFromRemote(department:Department):Observable<any>{
    return this.http.post("http://localhost:8090/updatedepartment",department);
  }

  public DeleteDepartmentFromRemote(department:Department):Observable<any>{
    return this.http.post("http://localhost:8090/deletedepartment",department);
  }

  public CountDepartmentFromRemote(department:Department):Observable<any>{
    return this.http.post("http://localhost:8090/dashboard",department);
  }
}
