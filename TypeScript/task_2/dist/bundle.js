/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
};
var isDirector = function (employee) {
    return typeof employee.workDirectorTasks === 'function';
};
var executeWork = function (employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
};
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
var teachClass = function (todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else if (todayClass === 'History') {
        return 'Teaching History';
    }
    return '';
};
console.log(teachClass('Math'));
console.log(teachClass('History'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVVBO0lBQUE7SUFZQSxDQUFDO0lBWEEsK0JBQVksR0FBWjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDQyxPQUFPLHdCQUF3QixDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDQyxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQztBQUNEO0lBQUE7SUFZQSxDQUFDO0lBWEEsOEJBQVksR0FBWjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDQyxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQztBQUVELElBQUksY0FBYyxHQUFHLFVBQUMsTUFBdUI7SUFDNUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUMvQyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDckI7U0FBTTtRQUNOLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztLQUN0QjtBQUNGLENBQUM7QUFFRCxJQUFNLFVBQVUsR0FBRyxVQUFDLFFBQTRCO0lBQy9DLE9BQU8sT0FBUSxRQUFxQixDQUFDLGlCQUFpQixLQUFLLFVBQVUsQ0FBQztBQUN2RSxDQUFDO0FBRUQsSUFBTSxXQUFXLEdBQUcsVUFBQyxRQUE0QjtJQUNoRCxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3BDO1NBQU07UUFDTixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ25DO0FBRUYsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFFLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUUsY0FBYyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUdqRCxJQUFNLFVBQVUsR0FBRyxVQUFDLFVBQW9CO0lBQ3ZDLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUMxQixPQUFPLGVBQWUsQ0FBQztLQUN2QjtTQUFNLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtRQUNwQyxPQUFPLGtCQUFrQixDQUFDO0tBQzFCO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDWCxDQUFDLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZztcblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuXHR3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcblx0d29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XG5cdH1cblxuXHRnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XG5cdH1cblxuXHR3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcyc7XG5cdH1cbn1cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdDYW5ub3Qgd29yayBmcm9tIGhvbWUnO1xuXHR9XG5cblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xuXHR9XG5cblx0d29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcblx0fVxufVxuXG5sZXQgY3JlYXRlRW1wbG95ZWUgPSAoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIgPT4ge1xuXHRpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG5cdFx0cmV0dXJuIG5ldyBUZWFjaGVyKCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG5ldyBEaXJlY3RvcigpO1xuXHR9XG59XG5cbmNvbnN0IGlzRGlyZWN0b3IgPSAoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IGVtcGxveWVlIGlzIERpcmVjdG9yID0+IHtcblx0cmV0dXJuIHR5cGVvZiAoZW1wbG95ZWUgYXMgRGlyZWN0b3IpLndvcmtEaXJlY3RvclRhc2tzID09PSAnZnVuY3Rpb24nO1xufVxuXG5jb25zdCBleGVjdXRlV29yayA9IChlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogc3RyaW5nID0+IHtcblx0aWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG5cdFx0cmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKTtcblx0fVxuXHRcbn1cbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrIChjcmVhdGVFbXBsb3llZSgyMDApKSk7XG5jb25zb2xlLmxvZyhleGVjdXRlV29yayAoY3JlYXRlRW1wbG95ZWUgKDEwMDApKSk7XG5cbnR5cGUgU3ViamVjdHMgPSAnTWF0aCcgfCAnSGlzdG9yeSc7XG5jb25zdCB0ZWFjaENsYXNzID0gKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nID0+IHtcblx0aWYgKHRvZGF5Q2xhc3MgPT09ICdNYXRoJykge1xuXHRcdHJldHVybiAnVGVhY2hpbmcgTWF0aCc7XG5cdH0gZWxzZSBpZiAodG9kYXlDbGFzcyA9PT0gJ0hpc3RvcnknKSB7XG5cdFx0cmV0dXJuICdUZWFjaGluZyBIaXN0b3J5Jztcblx0fVxuXHRyZXR1cm4gJyc7XG59O1xuY29uc29sZS5sb2codGVhY2hDbGFzcyAoJ01hdGgnKSk7XG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzICgnSGlzdG9yeScpKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9