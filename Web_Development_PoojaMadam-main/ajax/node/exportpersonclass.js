var Person = require('./persondetailsclass')

var person = new Person('Ram','Banglore');
person.printDetails();
person.greetMessage('Have a good Day');
console.log(person.mobile);