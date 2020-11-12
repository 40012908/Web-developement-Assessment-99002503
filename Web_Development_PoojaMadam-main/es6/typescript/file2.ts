import{ Product } from "./file1"

console.log(greeting111);
greet111();

var prod = new Product('Laptop',2000);
prod.getinfo();

import* as trial from "./file1";
console.log(trial.greeting111);
trial.greet111();
var prod = new trial.Product('Laptop',2000);
prod.getinfo();