// class in js
class Shape{
    constructor(type){
        this.type=type;
    }
    draw(){
        console.log(`Shape type is ${this.type}`);
    }
}

let s=new Shape('Circle');
s.draw();