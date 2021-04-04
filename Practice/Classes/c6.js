//private properties using symbols

const _type=Symbol();
const _draw=Symbol();
class Shape{
    constructor(type){
       this[_type]=type;// private property
    }
  [_draw](){// private method
      console.log(` From draw method and type value ${this._type}`)
  }
}
 let s=new Shape('Circle');
console.log(s);