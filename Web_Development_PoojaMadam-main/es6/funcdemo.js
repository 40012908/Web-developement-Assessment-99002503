var fun =(a,b=10)=>console.log(a+b);
fun();    //NaN
fun(500);  //510
fun(30,20);  //50

var fun =(a=10,b)=>console.log(a+b);
fun();    //NaN
fun(500);  //NN
fun(30,20);  //50
