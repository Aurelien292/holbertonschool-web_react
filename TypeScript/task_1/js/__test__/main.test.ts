import { 
  Teacher, 
  Directors, 
  printTeacher, 
  printTeacherFunction, 
  StudentClass, 
  StudentConstructor, 
  StudentInterface 
} from '../main';

describe('Teacher interface tests', () => {
  test('Teacher object structure and extra properties', () => {
    const teacher: Teacher = {
      firstName: 'John',
      lastName: 'Doe',
      fullTimeEmployee: true,
      yearsOfExperience: 5,
      location: 'Paris',
      contract: false,    // propriété dynamique
      subject: 'Math',    // autre propriété dynamique
    };

    expect(teacher.firstName).toBe('John');
    expect(teacher.lastName).toBe('Doe');
    expect(teacher.fullTimeEmployee).toBe(true);
    expect(teacher.yearsOfExperience).toBe(5);
    expect(teacher.location).toBe('Paris');
    expect(teacher.contract).toBe(false);
    expect(teacher.subject).toBe('Math');
  });
});

describe('Directors interface tests', () => {
  test('Directors extends Teacher with numberOfReports', () => {
    const director: Directors = {
      firstName: 'Jane',
      lastName: 'Smith',
      fullTimeEmployee: false,
      location: 'Lyon',
      numberOfReports: 10,
    };

    expect(director.firstName).toBe('Jane');
    expect(director.numberOfReports).toBe(10);
  });
});

describe('printTeacher function tests', () => {
  test('printTeacher returns correct formatted string', () => {
    expect(printTeacher('John', 'Doe')).toBe('J. Doe');
    expect(printTeacher('Alice', 'Smith')).toBe('A. Smith');
  });

  test('printTeacherFunction interface compatibility', () => {
    const func: printTeacherFunction = printTeacher;
    expect(func('Bob', 'Brown')).toBe('B. Brown');
  });
});

describe('StudentClass tests', () => {
  test('StudentClass implements StudentInterface and constructor works', () => {
    const student: StudentInterface = new StudentClass('Alice', 'Wonderland');
    expect(student.displayName()).toBe('Alice');
    expect(student.workOnHomework()).toBe('Currently working');

    // Test instanceof for class and constructor interface typing
    expect(student).toBeInstanceOf(StudentClass);

    // Optionally check constructor typing (if needed)
    const StudentCtor: StudentConstructor = StudentClass;
    const student2 = new StudentCtor('Bob', 'Builder');
    expect(student2.displayName()).toBe('Bob');
  });
});
