function createCircle(radius){
    return {
        radius:radius,
        draw :function(){
            console.log(`Draw by factory function`);
        }
    }
}

function Circle(radius){
 this.radius=radius,
 this.draw=function(){
 console.log(`Draw by constructor function`);
}
}

let c1=createCircle(12);
console.log(c1);
c1.draw();
console.log(c1.constructor);

let c2=new Circle(15);
console.log(c2);
c2.draw();
console.log(c2.constructor);



