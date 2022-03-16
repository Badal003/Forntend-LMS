import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userrole } from '../class/userrole';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(private http:HttpClient) { }
  public AddUserroleFromRemote(userrole:Userrole):Observable<any>{
    return this.http.post("http://localhost:8090/adduserrole",userrole)
   }
  
  public FindUserroleFromRemote(userrole:Userrole):Observable<any>{
    return this.http.post("http://localhost:8090/finduserrole",userrole);
  }   

  public DisplaysUserroles(userrole:Userrole):Observable<any>{
    return this.http.post("http://localhost:8090/findalluserrole",userrole);
  }

  public UpdateUserroleFromRemote(userrole:Userrole):Observable<any>{
    return this.http.post("http://localhost:8090/updateuserrole",userrole);
  }

  public DeleteUserroleFromRemote(userrole:Userrole):Observable<any>{
    return this.http.post("http://localhost:8090/deleteuserrole",userrole);
  }

  public CountDesignationFromRemote(userrole:Userrole):Observable<any>{
    return this.http.post("http://localhost:8090/dashboard",userrole);
  }
  
}
