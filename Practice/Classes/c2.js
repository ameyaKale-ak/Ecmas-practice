//hoisting 

let s=new Shape('Circle');
s.print();

class Shape{
    constructor(type){
        this.type=type;
    }
    print(){
        console.log(`Type is ${this.type}`);
    }
}
// will give error 