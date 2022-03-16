import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation } from '../class/designation';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http:HttpClient) { }
  public AddDesignationFromRemote(designation:Designation):Observable<any>{
    return this.http.post("http://localhost:8090/adddesignation",designation)
   }
  
  public FindDesignationFromRemote(designation:Designation):Observable<any>{
    return this.http.post("http://localhost:8090/finddesignation",designation);
  }   

  public DisplaysDesignations(designation:Designation):Observable<any>{
    return this.http.post("http://localhost:8090/findalldesignation",designation);
  }

  public UpdateDesignationFromRemote(designation:Designation):Observable<any>{
    return this.http.post("http://localhost:8090/updatedesignation",designation);
  }

  public DeleteDesignationFromRemote(designation:Designation):Observable<any>{
    return this.http.post("http://localhost:8090/deletedesignation",designation);
  }

  public CountDesignationFromRemote(designation:Designation):Observable<any>{
    return this.http.post("http://localhost:8090/dashboard",designation);
  }
}
