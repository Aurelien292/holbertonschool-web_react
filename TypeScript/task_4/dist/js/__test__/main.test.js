"use strict";
/// <reference path="../subjects/Teacher.ts" />
/// <reference path="../subjects/Subject.ts" />
/// <reference path="../subjects/Cpp.ts" />
/// <reference path="../subjects/React.ts" />
/// <reference path="../subjects/Java.ts" />
describe('Subjects Tests', function () {
    var teacherWithExpC;
    var teacherWithoutExp;
    beforeEach(function () {
        teacherWithExpC = {
            firstName: 'John',
            lastName: 'Doe',
            experienceTeachingC: 5,
            experienceTeachingReact: 3,
            experienceTeachingJava: 4,
        };
        teacherWithoutExp = {
            firstName: 'Jane',
            lastName: 'Smith',
        };
    });
    describe('Cpp Class', function () {
        it('should return correct requirements and teacher with experience', function () {
            var cpp = new Subjects.Cpp();
            cpp.setTeacher(teacherWithExpC);
            expect(cpp.getRequirements()).toBe('Here is the list of requirements for Cpp');
            expect(cpp.getAvailableTeacher()).toBe('Available Teacher: John');
        });
        it('should return no available teacher when experience is missing', function () {
            var cpp = new Subjects.Cpp();
            cpp.setTeacher(teacherWithoutExp);
            expect(cpp.getAvailableTeacher()).toBe('No available teacher');
        });
    });
    describe('React Class', function () {
        it('should return correct requirements and teacher with experience', function () {
            var react = new Subjects.React();
            react.setTeacher(teacherWithExpC);
            expect(react.getRequirements()).toBe('Here is the list of requirements for React');
            expect(react.getAvailableTeacher()).toBe('Available Teacher: John');
        });
        it('should return no available teacher when experience is missing', function () {
            var react = new Subjects.React();
            react.setTeacher(teacherWithoutExp);
            expect(react.getAvailableTeacher()).toBe('No available teacher');
        });
    });
    describe('Java Class', function () {
        it('should return correct requirements and teacher with experience', function () {
            var java = new Subjects.Java();
            java.setTeacher(teacherWithExpC);
            expect(java.getRequirements()).toBe('Here is the list of requirements for Java');
            expect(java.getAvailableTeacher()).toBe('Available Teacher: John');
        });
        it('should return no available teacher when experience is missing', function () {
            var java = new Subjects.Java();
            java.setTeacher(teacherWithoutExp);
            expect(java.getAvailableTeacher()).toBe('No available teacher');
        });
    });
});
//# sourceMappingURL=main.test.js.map