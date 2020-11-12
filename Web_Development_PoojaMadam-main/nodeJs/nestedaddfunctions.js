var sum = function(n1,n2,n3){
    return (n1+n2+n3)
}
var total = sum(10,20,30);
console.log(total);

// This is second method to call a function is known as Closure
var total = (function(n1,n2,n3){
    return (n1+n2+n3)
})(10,20,30);
console.log(total);