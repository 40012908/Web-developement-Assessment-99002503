export var greeting111 = 'hello world'; 
export function greet111() 
{ 
    console.log('exported') 
    ownMsg(); 
} 
function ownMsg() 
{ 
    console.log('not exported') } 
    export class Product 
{  
    constructor(public itemName: string, public price: number) { } 
getinfo = () => 
{ 
    console.log(`${this.itemName} is of price ${this.price}`) } 
}