var Employee = function(){}
    Employee.prototype.name='Raju';
    Employee.prototype.gender ='Male';
    Employee.prototype.printName = function(){
        console.log('Welcome ' +this.name);
    };

    emp1 = new Employee();
    emp1.printName();
//To add other user name
    emp1.name="Pooja";



    console.log(emp1.name);
    console.log(emp1.gender);

