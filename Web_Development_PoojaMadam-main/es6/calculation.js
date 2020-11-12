function showFinalCost(item){
    return function(cost){
        if(item>100){
            price = (item*(cost*.10));
        }
        else{
            price = (item*cost);
        }
        return price;
    };
}
var total = showFinalCost(100)
console.log(total(20));