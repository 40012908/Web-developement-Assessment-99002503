"use strict";

var stud = {
  name: 'Ram',
  empId: 20,
  hobbies: ['music', 'sports'],
  address: {
    city: 'ban',
    'state': 'kar'
  }
}; //in terms of string

var jsonstring = JSON.stringify(stud);
console.log(jsonstring); //console.log(jsonstring.name);  WILL SHOW ERROR bcoz we cant do any opeartions with strings
//in terms of object

var jsobj = JSON.parse(jasonstring);
console.log(jsobj);
console.log(jsobj.name);