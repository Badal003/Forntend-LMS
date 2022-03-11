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
}
