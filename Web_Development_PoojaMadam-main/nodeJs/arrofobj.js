var mobiles = [
    {
        name:'young',
        brand:'Samsung',
        price :8000,
        accessories: ['charger','Shield'],
        features:{
            ram:900
    }
    },
    {
        name:'Realme C2',
        brand:'Realme',
        price :6000,
        Accessories: ['charger','Shield','warranty']
    },
    {
        name:'iphone11',
        brand:'iphone',
        price :60000,
        Accessories: ['charger','Shield','warranty','headphone']
    }
   ]
   mobiles.forEach(value =>{
   for(const property in value)
   {
        var mob=value[property];
        if(mob instanceof Array){
        for(const i in mob){
        console.log('acces: '+mob[i]);
    }
    
    }else if(typeof mob == 'object'){
    for(const key in mob){
        console.log(key+':'+mob[key]);
    }
    }
    else if(typeof mob == 'function')
    {
        mob();
    }else{
        console.log(mob)
    }
   }
   })