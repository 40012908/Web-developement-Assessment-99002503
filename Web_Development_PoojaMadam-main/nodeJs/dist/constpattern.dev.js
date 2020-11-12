"use strict";

var Student = function Student(name, city) {
  this.name = name;
  this.city = city;

  this.getDetails = function () {
    console.log(this.name, this.city);
  };
};

student = new Student('Raju', 'Banglore');
console.log(student.name, student.city);
student.getDetails();
Student.prototype.age = 20;

Student.prototype.greet = function (message) {
  console.log(message, this.name);
};

console.log(student.age);
student.greet('welcome');
student1 = new Student('Ram', 'ooty');
student1.age = 30;
student1.greet('Great Day');
console.log(student1.name, student1.city, student1.age);