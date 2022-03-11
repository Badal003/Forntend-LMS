import { Department } from "./department";
import { Designation } from "./designation";
import { Userrole } from "./userrole";

export class Employee {
    empid: number| undefined;
    firstName: string| undefined;
    middleName: string| undefined;
    lastName:string| undefined;
    gender: string| undefined;
    emailId:string| undefined;
    mobileNumber:number| undefined;
    password: string| undefined;
    dateOfBirth: string| undefined;
    dateOfJoin:string| undefined;
    department:Department| undefined;
    designation:Designation| undefined; 
    userRole:Userrole| undefined;
    
    constructor(){}
    
}
