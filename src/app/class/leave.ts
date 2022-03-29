import { Employee } from "./employee";
import { Leavetype } from "./leavetype";

export class Leave {
    leaveapplyId:number| undefined; 
    fromDate: string| undefined;  
    toDate:string| undefined; 
    applydate: string| undefined; 
    status: number| undefined;
    leavetype:Leavetype | undefined;
    employee:Employee| undefined;
}
