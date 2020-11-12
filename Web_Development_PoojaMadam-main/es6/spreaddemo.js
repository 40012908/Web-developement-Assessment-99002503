let newarr=[90,20,110,50,60];
console.log(Math.max(newarr));
console.log(Math.max(90,20,110,50,60));


//spreading the array
//turne=s the array into list of values
//spread opeartor
console.log(Math.max(...newarr));

let arr1 =[1,-2,3,4];
let arr2 =[8,3,-8,1];

console.log(Math.max(...arr1,...arr2))

//can be combined with other values
console.log(Math.max(10,...arr1,...arr2));

let msg="Helllo"
console.log(...msg);