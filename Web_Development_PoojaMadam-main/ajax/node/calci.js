exports.add = function(num1,num2){
    dontExportThis();
    return parseInt(num1,2)+parseInt(num2,2);
}
exports.multiply = function(num1,num2){
    dontExportThis();
    return parseInt(num1,10)*parseInt(num2,10);
}
exports.message ="hello World";

function dontExportThis(){
    console.log("Calculator");
}