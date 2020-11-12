
var student = [ { name:'young', brand:'Samsung', price :8000, Accessories: ['charger','Shield'] }, 
{ name:'Realme C2', brand:'Realme', price :6000, Accessories: ['charger','Shield','warranty'] }, 
{ name:'iphone11', brand:'iphone', price :60000, Accessories: ['charger','Shield','warranty','headphone'] }, ]

for(const prop in student ){
    var stud = student[prop];

    if(stud instanceof Array){
        for(const i in stud){
            console.log('hobby: ' +stud[i]);
        }
    }else if(typeof stud =='object'){
        for(const i in stud){
            console.log(key+ ' : '+stud[key]);
        }
    }
    else if(typeof stud == 'function'){
        stud();
    }
    else{
        console.log(stud);
    }

}
