
// array of arguments is passed by rest. if you've multiple arguments you can pass it by ...args
// when you pass ... it'll convert it into array
function addNumbers(...nums:number[]){
var sum=0;
for(let i=0;i<nums.length;i++){
    sum+=nums[i];
}
console.log("Sum" ,sum);
}
addNumbers(10,20);
addNumbers(10,20,30);
addNumbers(10,20,40);

//Default Parameters
function userDetails(name:string,city:string='Banglore'){
    console.log('name' +name);
    console.log('city' +city);
}
// userDetails must provide at least one parameter
userDetails('Raju');
userDetails('Raju','Ooty');

// anonymus function
var greet = function(msg:string){
    return msg;
}
console.log(greet('Have a great Day'));

//Using Lamda
greet = (msg:string)=>{
    return 'welcome' +msg;
}

//single statement
var show =() => console.log('Hi');
show();

//var checktype = (a:number,b:number) =>{ ---Error---- 
var checktype = (a,b) =>{
    console.log(a+b);
}

checktype(10,20);
checktype(10,'Ram');
checktype('Ram','Tom');

