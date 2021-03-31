function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        this.diameter();//prototype in instance
        console.log('Draw Function');
    }
    this.move=function(){
        console.log('Move Function');
    }
    
}
 
console.log(Circle.constructor());

let c1=new Circle(10);
let c2=new Circle(10);
let x={name:'A'};

//property description
let ob=Object.getPrototypeOf(x);
let descriptor=Object.getOwnPropertyDescriptor(ob,'toString');
console.log(descriptor);
console.log(`--------------------------`);
Circle.prototype.diameter=function(){
    this.move();//instance function in prototype function
    console.log(this.radius*2);
}

console.log(c1);
c2.draw();
c1.diameter();