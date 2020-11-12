class Vehicle{
    constructor(brand,price){
        this.brand=brand;
        this.price =price;
    }
    set details (discount){
        this.brand = this.brand.toUpperCase();
        this.price = (this.price -discount);
    } 
    get details(){
        return this.brand+" "+this.price;
    }
}
veh = new Vehicle('Honda',100000);
console.log(veh);
veh.details= 1000;
console.log(veh.details);
