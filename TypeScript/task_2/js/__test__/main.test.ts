import {
  DirectorInterface,
  TeacherInterface,
  Director,
  Teacher,
  createEmployee,
  isDirector,
  executeWork,
  Subjects,
  teachClass
} from '../main';

describe('DirectorInterface and Director class', () => {
  let director: DirectorInterface;

  beforeEach(() => {
    director = new Director();
  });

  test('workFromHome returns correct string', () => {
    expect(director.workFromHome()).toBe('Working from home');
  });

  test('getCoffeeBreak returns correct string', () => {
    expect(director.getCoffeeBreak()).toBe('Getting a coffee break');
  });

  test('workDirectorTasks returns correct string', () => {
    expect(director.workDirectorTasks()).toBe('Getting to director tasks');
  });
});

describe('TeacherInterface and Teacher class', () => {
  let teacher: TeacherInterface;

  beforeEach(() => {
    teacher = new Teacher();
  });

  test('workFromHome returns correct string', () => {
    expect(teacher.workFromHome()).toBe('Cannot work from home');
  });

  test('getCoffeeBreak returns correct string', () => {
    expect(teacher.getCoffeeBreak()).toBe('Cannot have a break');
  });

  test('workTeacherTasks returns correct string', () => {
    expect(teacher.workTeacherTasks()).toBe('Getting to work');
  });
});

describe('createEmployee function', () => {
  test('returns Teacher if salary < 500 (number)', () => {
    const emp = createEmployee(300);
    expect(emp).toBeInstanceOf(Teacher);
  });

  test('returns Director if salary >= 500 (number)', () => {
    const emp = createEmployee(1000);
    expect(emp).toBeInstanceOf(Director);
  });

  test('returns Director if salary is a string', () => {
    const emp = createEmployee('600');
    expect(emp).toBeInstanceOf(Director);
  });
});

describe('isDirector type guard function', () => {
  test('returns true if employee is Director', () => {
    const director = new Director();
    expect(isDirector(director)).toBe(true);
  });

  test('returns false if employee is Teacher', () => {
    const teacher = new Teacher();
    expect(isDirector(teacher)).toBe(false);
  });
});

describe('executeWork function', () => {
  test('calls workDirectorTasks if employee is Director', () => {
    const director = new Director();
    expect(executeWork(director)).toBe('Getting to director tasks');
  });

  test('calls workTeacherTasks if employee is Teacher', () => {
    const teacher = new Teacher();
    expect(executeWork(teacher)).toBe('Getting to work');
  });
});

describe('teachClass function with Subjects type', () => {
  test('returns "Teaching Math" if todayClass is Math', () => {
    expect(teachClass('Math')).toBe('Teaching Math');
  });

  test('returns "Teaching History" if todayClass is History', () => {
    expect(teachClass('History')).toBe('Teaching History');
  });
});
