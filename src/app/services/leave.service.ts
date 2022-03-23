import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leavetype } from '../class/leavetype';

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
}
