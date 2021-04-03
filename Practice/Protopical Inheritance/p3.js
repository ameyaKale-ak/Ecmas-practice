//Mixins
function Mixins(target,...arg){
    Object.assign(target.prototype,...arg);
}
 canEat={
     eat(){
     console.log(`Can eat`);
     }
};
let canWalk={
    walk(){
    console.log(`Can Walk`);
    }
};
 canSwim={
     swim(){
    console.log(`Can Swim`);
     }
};

function Person(){
}
Mixins(Person,canEat,canWalk);

function Fish(){

}
Mixins(Fish,canEat,canSwim);


let p=new Person();
p.eat();
p.walk();
console.log(`------------`);
let f=new Fish();
f.eat();
f.swim();