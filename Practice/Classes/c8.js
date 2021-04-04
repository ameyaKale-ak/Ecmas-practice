//getters and setters
class Car{
    constructor(type){
        this.type=type;
    }
    get showType(){
        //console.log(`Type of car is ${this.type}`);
        return this.type;
    }
    set setType(value){
        this.type=value;
        console.log(`New type is ${this.type}`);
    }
}

let car1=new Car('Electric');
console.log(car1.showType);
car1.setType='Petrol';
console.log(car1.showType);
