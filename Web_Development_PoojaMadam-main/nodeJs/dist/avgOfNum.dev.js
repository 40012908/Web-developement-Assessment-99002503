"use strict";

/*
function avgOfNum(x,y){
    var sum = function(){
        return x+y;
    }
    return sum()/2;
}

var result = avgOfNum(10,20);
console.log(result);


//step1 Anonymus function
var avgOfNums =function (x,y){

    return function(){
        return x+y;
    }()/2;
}

var result = avgOfNum(10,20);
console.log(result);
 */
//step 2 returi fun its

/*
var avgOfNums =function (x,y){
    
    return function(){
        return (x+y);
    };
}

var result = avgOfNums(10,20);
console.log(result()/2);
console.log(avgOfNums(10,20)()/2);    
*/
//step 3
var avg1 = function (x, y) {
  return function () {
    return x + y;
  };
}(10, 20)();

console.log(avg1 / 2);