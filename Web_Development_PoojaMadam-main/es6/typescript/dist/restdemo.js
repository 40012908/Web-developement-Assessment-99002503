// array of arguments is passed by rest. if you've multiple arguments you can pass it by ...args
// when you pass ... it'll convert it into array
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log("Sum", sum);
}
addNumbers(10, 20);
addNumbers(10, 20, 30);
addNumbers(10, 20, 40);
//Default Parameters
function userDetails(name, city) {
    if (city === void 0) { city = 'Banglore'; }
    console.log('name' + name);
    console.log('city' + city);
}
// userDetails must provide at least one parameter
userDetails('Raju');
userDetails('Raju', 'Ooty');
// anonymus function
var greet = function (msg) {
    return msg;
};
console.log(greet('Have a great Day'));
//Using Lamda
greet = function (msg) {
    return 'welcome' + msg;
};
//single statement
var show = function () { return console.log('Hi'); };
show();
//var checktype = (a:number,b:number) =>{ ---Error---- 
var checktype = function (a, b) {
    console.log(a + b);
};
checktype(10, 20);
checktype(10, 'Ram');
checktype('Ram', 'Tom');
