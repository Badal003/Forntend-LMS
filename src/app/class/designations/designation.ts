export class Designation {
    private _designationId!: number;
    private _designationName!: string;
    private _designationDescription!: string;
    public get designationId(): number {
        return this._designationId;
    }
    public set designationId(value: number) {
        this._designationId = value;
    }
    
    public get designationName(): string {
        return this._designationName;
    }
    public set designationName(value: string) {
        this._designationName = value;
    }
    
    public get designationDescription(): string {
        return this._designationDescription;
    }
    public set designationDescription(value: string) {
        this._designationDescription = value;
    }

    constructor(){}
}
