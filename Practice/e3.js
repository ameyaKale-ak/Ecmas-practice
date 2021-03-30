function Circle(radius){
    this.radius=radius;
    this.draw=function(){
    console.log(`Draw by constructor function`);
   }
   }

let c2=new Circle(15);
c2.diameter=30;
console.log(c2);
console.log(c2.radius);
c2.draw();
console.log(c2.constructor);
console.log(`------------------`);
delete c2.radius;
console.log(c2);