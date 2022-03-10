export class Department {
    private _departmentId!: number;
    private _departmentShortName!: string;
    private _departmentFullName!: string;
    public get departmentId(): number {
        return this._departmentId;
    }
    public set departmentId(value: number) {
        this._departmentId = value;
    }
    
    public get departmentShortName(): string {
        return this._departmentShortName;
    }
    public set departmentShortName(value: string) {
        this._departmentShortName = value;
    }
    
    public get departmentFullName(): string {
        return this._departmentFullName;
    }
    public set departmentFullName(value: string) {
        this._departmentFullName = value;
    }
    
    constructor(){}
}
