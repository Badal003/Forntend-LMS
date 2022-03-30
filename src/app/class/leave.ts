import { Employee } from "./employee";
import { Leavetype } from "./leavetype";

export class Leave {
    leaveapplyId:number| undefined; 
    fromDate: string| undefined;  
    toDate:string| undefined; 
    applydate: string| undefined; 
    status: number| undefined;
    leaveType:Leavetype | undefined;
    employee:Employee| undefined;

    setleavetype(leavetype:Leavetype)
    {
        this.leaveType=leavetype
    }
    getleavetype()
    {
        return this.leaveType
    }
}
