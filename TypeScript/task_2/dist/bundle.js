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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVVBO0lBQUE7SUFZQSxDQUFDO0lBWEEsK0JBQVksR0FBWjtRQUNDLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDQyxPQUFPLHdCQUF3QixDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDQyxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQztBQUNEO0lBQUE7SUFZQSxDQUFDO0lBWEEsOEJBQVksR0FBWjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDQyxPQUFPLHFCQUFxQixDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDQyxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQztBQUVELElBQUksY0FBYyxHQUFHLFVBQUMsTUFBdUI7SUFDNUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUMvQyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDckI7U0FBTTtRQUNOLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztLQUN0QjtBQUNGLENBQUM7QUFFRCxJQUFNLFVBQVUsR0FBRyxVQUFDLFFBQTRCO0lBQy9DLE9BQU8sT0FBUSxRQUFxQixDQUFDLGlCQUFpQixLQUFLLFVBQVUsQ0FBQztBQUN2RSxDQUFDO0FBRUQsSUFBTSxXQUFXLEdBQUcsVUFBQyxRQUE0QjtJQUNoRCxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3BDO1NBQU07UUFDTixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ25DO0FBQ0YsQ0FBQyxDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBRSxjQUFjLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcblx0d29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuXHRnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG5cdHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xuXHR9XG5cblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuXHR9XG5cblx0d29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xuXHR9XG59XG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcblx0fVxuXG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcblx0fVxuXG5cdHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XG5cdH1cbn1cblxubGV0IGNyZWF0ZUVtcGxveWVlID0gKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyID0+IHtcblx0aWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xuXHRcdHJldHVybiBuZXcgVGVhY2hlcigpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBuZXcgRGlyZWN0b3IoKTtcblx0fVxufVxuXG5jb25zdCBpc0RpcmVjdG9yID0gKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciA9PiB7XG5cdHJldHVybiB0eXBlb2YgKGVtcGxveWVlIGFzIERpcmVjdG9yKS53b3JrRGlyZWN0b3JUYXNrcyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuY29uc3QgZXhlY3V0ZVdvcmsgPSAoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IHN0cmluZyA9PiB7XG5cdGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuXHRcdHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG5cdH1cbn07XG5jb25zb2xlLmxvZyhleGVjdXRlV29yayAoY3JlYXRlRW1wbG95ZWUoMjAwKSkpO1xuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsgKGNyZWF0ZUVtcGxveWVlICgxMDAwKSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==