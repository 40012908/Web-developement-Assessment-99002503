
var printVal = (val:string|number) =>{
    if(typeof(val)=='string'){
        console.log('Welcome' +val)
    }if(typeof(val)=='number'){
        console.log('Your Score is' +val)
    }

}
printVal('Kumar');
printVal(10);

let printValues = (val:string[]|number|object) =>{
    if(Array.isArray(val)){
        console.log('print Array' +val);  //array
        console.log(val);  
        console.log(...val);

    }
    else if(typeof(val)=='object'){
        console.log(val);
    }
}
printValues(['Raj','Ram']);
printValues({name: 'kumu'});
