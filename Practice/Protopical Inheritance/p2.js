function extendd(child,parent){
child.prototype=Object.create(parent.prototype);
child.prototype.constructor=child;
}

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
    
    
    extendd(Circle,Shape);
    extendd(Triangle,Shape);
    
    Triangle.prototype.printName=function(){
        Shape.prototype.printName();
        console.log(`Print Function from Triangle`);
    }

    Circle.prototype.printName=function(){
        console.log(`Print Function from Circle`);
    }

let c1= new Circle(13,'redd');
let t1= new Triangle(13);
c1.printName();
console.log(c1);
console.log(`-----------`);
console.log(t1);
t1.printName();