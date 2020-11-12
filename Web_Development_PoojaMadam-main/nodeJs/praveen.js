var Mobile = [ 
    { 
        name:'young', brand:'Samsung', price :8000, 
    Accessories: ['charger','Shield']
 }, 
{ 
    name:'Realme C2', brand:'Realme', price :6000, 
Accessories: ['charger','Shield','warranty'] 
}, 
{ name:'iphone11', brand:'iphone', price :60000, 
Accessories: ['charger','Shield','warranty','headphone'] }, 
] 



for(const i in Mobile)
{ var mob=Mobile[i]; 
    console.log(mob.brand) 
    if(mob instanceof Array)
    { 
        for(const i in mob){ console.log('hobby: '+mob[i]); 
    } 
}
    else if(typeof mob == 'object')
    { 
        for(const key in mob)
        { console.log(key+':'+mob[key]); 
    } 
}
    else if(typeof mob == 'function')
    { 
        mob(); 
    }
    else{ console.log(mob) 
    } 
}