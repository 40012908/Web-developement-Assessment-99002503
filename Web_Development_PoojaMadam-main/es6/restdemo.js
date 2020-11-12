var sumOfNum = function(a,b){
        return a+b;
    }

console.log(sumOfNum(10,20));


// array of arguments is passed by rest. if you've multiple arguments you can pass it by ...args
// when you pass ... it'll convert it into array
var sumOfNums = function(...args){
    var sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];
    }
    console.log("Sum" ,sum);
}
sumOfNums(10,20);
sumOfNums(10,20,30);
sumOfNums(10,20,40);


//Using other for loop
var sumOfNums = function(...args){
    var sum=0;
    for(let i in args){
        sum+=args[i];
    }
    console.log("Sum" ,sum);
}
sumOfNums(10,20);
sumOfNums(10,20,30);
sumOfNums(10,20,40);


fun = function(a,b,...args){
    console.log("a",a);    //a 1   b 2   [ 'hello', 900 ]
    console.log("b",b);    
    console.log(args);
}
fun(1,2,"hello",900);
fun(1);
fun(1,2);