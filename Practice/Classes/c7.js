//private properties and methods using weakmap

const _type=new WeakMap();
const _move=new WeakMap();
class Shape{
 constructor(type){
  _type.set(this,type);//private property
  _move.set(this,()=>{//private method
    console.log(`Private method`,this);
  });
 }
type(){
    _move.get(this)();//to access we use .get
    console.log(_type.get(this));//to access we use .get it returns the value of the type property
}
}

let s=new Shape('Triangle');
console.log(s);
s.type();