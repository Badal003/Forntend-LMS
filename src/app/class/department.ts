export class Department {
    departmentId: number| undefined;
    departmentShortName : string| undefined;
    departmentFullName: string| undefined;

    constructor(){}

    setId(id:number)
    {
        this.departmentId=id
    }
}
