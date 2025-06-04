import { Student, student1, student2, studentsList } from '../main';

describe('Student list tests', () => {
  test('student1 has correct structure', () => {
    expect(student1).toEqual({
      firstName: 'Jack',
      lastName: 'BO',
      age: 25,
      location: 'Quimper',
    });
  });

  test('student2 has correct structure', () => {
    expect(student2).toEqual({
      firstName: 'John',
      lastName: 'DUPOND',
      age: 23,
      location: 'Rennes',
    });
  });

  test('studentsList contains both students', () => {
    expect(studentsList).toContain(student1);
    expect(studentsList).toContain(student2);
  });
});
