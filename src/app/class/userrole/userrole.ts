export class Userrole {
    private _userroleId!: number;
    private _userroleName!: string;
    constructor(){}
    public get userroleId(): number {
        return this._userroleId;
    }
    public set userroleId(value: number) {
        this._userroleId = value;
    }
   
    public get userroleName(): string {
        return this._userroleName;
    }
    public set userroleName(value: string) {
        this._userroleName = value;
    }   
}
