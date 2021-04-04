class Shape{
    constructor(type){
        this.type=type;
    }
    draw(){
        console.log(`Shape method`,this);
    }
}

let s=new Shape('Circle');
const d=s.draw();
console.log(d,this);// will give undefined as thiswill point to global and for class body js engine will follow strict mode