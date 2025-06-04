export interface Teacher{

	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

export interface Directors extends Teacher {
	numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher("John", "Doe"));

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export interface StudentConstructor {
	new (firstName: string, lastName: string): StudentInterface;
}

export interface StudentInterface {
	workOnHomework(): string;
	displayName(): string;
}

export class StudentClass implements StudentInterface {
	constructor(public firstName: string, public lastName: string) {}
	workOnHomework(): string {
		return 'Currently working';
	}
	displayName(): string {
		return this.firstName;
	}
}