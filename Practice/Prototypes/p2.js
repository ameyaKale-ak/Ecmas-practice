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

Circle.prototype.diameter=function(){
    this.move();//instance function in prototype function
    console.log(this.radius*2);
}

let c1=new Circle(10);

let ob=Object.keys(c1);
console.log(ob);
console.log(`---------------`);
for(let k in c1)
console.log(k);