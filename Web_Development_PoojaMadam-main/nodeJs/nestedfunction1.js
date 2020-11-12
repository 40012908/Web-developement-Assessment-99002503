function greet(name){
    console.log('hello' +name);
}
greet('priya');

// This is second method to call a function is known as Closure
(function greet(name){
    console.log('hello' +name);
})('priya');
