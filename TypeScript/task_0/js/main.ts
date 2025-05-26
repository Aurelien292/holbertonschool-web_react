interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = { firstName: "Jack" ,lastName: "BO" ,age: 25 ,location : "Quimper"};
const student2: Student = { firstName: "John" ,lastName: "DUPOND" ,age: 23 ,location : "Rennes"};
const studentsList: Student[] = [student1, student2];

console.log(studentsList);
console.log(student1);
console.log(student2);

