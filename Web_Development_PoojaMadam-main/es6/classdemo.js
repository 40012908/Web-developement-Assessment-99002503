//This is normal class method

// class Person{ 
//     constructor(name,city)
//     { 
//         this.city =city; this.name = name; 
//     }
//      getName()
//      { 
//          return this.name; 
//         } 
//      setName(name)
//      { 
//          this.name = name; 
//         } 
//     } 
// var person = new Person(); 
// person.setName('Marley'); 
// console.log(person.getName());


//This is class method used in ES6
class Person{
    constructor(name,city){
        this.city = city;
        this.name = name;
    }
    get firstname(){ //here get and set are not functions but properties
        return this.name.toUpperCase();
    }
    set firstname(name){
        this.name = name;
    }
}
var person = new Person('Pooja');
console.log(person.firstname);
person.firstname='Marley'; //here get and set are not functions but properties thus we assign values by = 
console.log(person.firstname);