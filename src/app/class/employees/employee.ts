import { Department } from "../departments/department";
import { Designation } from "../designations/designation";
import { Userrole } from "../userrole/userrole";

export class Employee {
    private empid!: number;
    private firstName!: string;
    private middleName!: string;
    private lastName!:string;
    private gender!: string;
    private emailId!:string;
    private mobileNumber!:number;
    private password!: string;
    private dateOfBirth!: string;
    private dateOfJoin!:string;
    private department!:Department;
    private designation!:Designation; 
    private userRole!:Userrole;
    /**
     * Getter $empid
     * @return {number }
     */
	public get $empid(): number  {
		return this.empid;
	}

    /**
     * Getter $firstName
     * @return {string}
     */
	public get $firstName(): string {
		return this.firstName;
	}

    /**
     * Getter $middleName
     * @return {string}
     */
	public get $middleName(): string {
		return this.middleName;
	}

    /**
     * Getter $lastName
     * @return {string}
     */
	public get $lastName(): string {
		return this.lastName;
	}

    /**
     * Getter $gender
     * @return {string}
     */
	public get $gender(): string {
		return this.gender;
	}

    /**
     * Getter $emailId
     * @return {string}
     */
	public get $emailId(): string {
		return this.emailId;
	}

    /**
     * Getter $mobileNumber
     * @return {number}
     */
	public get $mobileNumber(): number {
		return this.mobileNumber;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Getter $dateOfBirth
     * @return {string}
     */
	public get $dateOfBirth(): string {
		return this.dateOfBirth;
	}

    /**
     * Getter $dateOfJoin
     * @return {string}
     */
	public get $dateOfJoin(): string {
		return this.dateOfJoin;
	}

    /**
     * Getter $department
     * @return {Department}
     */
	public get $department(): Department {
		return this.department;
	}

    /**
     * Getter $designation
     * @return {Designation }
     */
	public get $designation(): Designation  {
		return this.designation;
	}

    /**
     * Getter $userRole
     * @return {Userrole}
     */
	public get $userRole(): Userrole {
		return this.userRole;
	}

    /**
     * Setter $empid
     * @param {number } value
     */
	public set $empid(value: number ) {
		this.empid = value;
	}

    /**
     * Setter $firstName
     * @param {string} value
     */
	public set $firstName(value: string) {
		this.firstName = value;
	}

    /**
     * Setter $middleName
     * @param {string} value
     */
	public set $middleName(value: string) {
		this.middleName = value;
	}

    /**
     * Setter $lastName
     * @param {string} value
     */
	public set $lastName(value: string) {
		this.lastName = value;
	}

    /**
     * Setter $gender
     * @param {string} value
     */
	public set $gender(value: string) {
		this.gender = value;
	}

    /**
     * Setter $emailId
     * @param {string} value
     */
	public set $emailId(value: string) {
		this.emailId = value;
	}

    /**
     * Setter $mobileNumber
     * @param {number} value
     */
	public set $mobileNumber(value: number) {
		this.mobileNumber = value;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    /**
     * Setter $dateOfBirth
     * @param {string} value
     */
	public set $dateOfBirth(value: string) {
		this.dateOfBirth = value;
	}

    /**
     * Setter $dateOfJoin
     * @param {string} value
     */
	public set $dateOfJoin(value: string) {
		this.dateOfJoin = value;
	}

    /**
     * Setter $department
     * @param {Department} value
     */
	public set $department(value: Department) {
		this.department = value;
	}

    /**
     * Setter $designation
     * @param {Designation } value
     */
	public set $designation(value: Designation ) {
		this.designation = value;
	}

    /**
     * Setter $userRole
     * @param {Userrole} value
     */
	public set $userRole(value: Userrole) {
		this.userRole = value;
	}
   


    constructor(){}
    
}
