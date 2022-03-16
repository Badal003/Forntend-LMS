export class Designation {
    designationId: number| undefined;
    designationName: string| undefined;
    designationDescription!: string| undefined;
    
    constructor(){}
    setId(id:number)
    {
        this.designationId=id
    }
}
