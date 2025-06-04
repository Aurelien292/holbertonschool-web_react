export interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

export const student1: Student = { firstName: "Jack" ,lastName: "BO" ,age: 25 ,location : "Quimper"};
export const student2: Student = { firstName: "John" ,lastName: "DUPOND" ,age: 23 ,location : "Rennes"};
export const studentsList: Student[] = [student1, student2];

console.log(studentsList);
console.log(student1);
console.log(student2);

