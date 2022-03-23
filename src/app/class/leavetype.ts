export class Leavetype {
    leavetypeId:number| undefined;
    leaveName: string| undefined;
    leaveDescription: string| undefined;
    
    setId(id:number)
    {
        this.leavetypeId=id
    }
}
