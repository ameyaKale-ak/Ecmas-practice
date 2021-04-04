// inheritance and method overriding
class Shapes{
    constructor(type){
        this.type=type;
    }
    draw(){
        console.log(`Draw from Shapes`);
    }
}

class Triangle extends Shapes{//inheritance using extends keyword
    constructor(type,side){
        super(type);
        this.side=side;
    }
    draw(){//overriding method
        super.draw();//using parent method using super keyword
        console.log(`Draw from Triangle`);
    }
}

let t=new Triangle('Triangle',30);
console.log(t);
t.draw();
