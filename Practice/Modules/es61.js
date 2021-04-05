
export class Car{
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

