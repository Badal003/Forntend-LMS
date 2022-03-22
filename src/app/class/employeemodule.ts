export class Employeemodule {
    id: number| undefined;
    firstName: string| undefined;
    middleName: string| undefined;
    lastName:string| undefined;
    gender: string| undefined;
    emailId:string| undefined;
    mobileNumber:number| undefined;
    password: string| undefined;
    dateOfBirth: string| undefined;
    dateOfJoin:string| undefined;
    departmentId:number| undefined;
    designationId:number| undefined; 
    userroleId:number| undefined;
    
    constructor(){}
    setId(id:number)
    {
        this.id=id
    }
    
}
