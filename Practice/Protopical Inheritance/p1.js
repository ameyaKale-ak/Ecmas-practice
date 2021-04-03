function Shape(color){
this.color=color;
}

Shape.prototype.printName=function(){
    console.log(`Print Function from Shape`);
}

function Circle(radis,color){
    Shape.call(this,color);
    this.radius=radis;
    this.printRadius=function(){
        console.log(`Radius is ${this.radius}`);
    };

}
function Triangle(side){
    this.side=side;
    this.printSide=function(){
        console.log(`Side is ${this.side}`);
    };
}
Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.constructor=Circle;
Triangle.prototype=Object.create(Shape.prototype);
Triangle.prototype.constructor=Triangle;

let c1= new Circle(13,'redd');
let t1= new Triangle(13);
c1.printName();
console.log(c1);
console.log(`-----------`);
console.log(t1);
t1.printName();
