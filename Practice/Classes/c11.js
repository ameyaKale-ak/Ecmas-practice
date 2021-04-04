const _s=new WeakMap();
class Stack{
    constructor(){
        _s.set(this,[])
    }
    push(value){
        _s.get(this).push(value);
    }
    pop(){
      let p= _s.get(this).pop();
       return p;
    }
    peek(){
       return _s.get(this)[_s.get(this).length-1];
    }
   get  count(){
        return _s.get(this).length;
    }
}

let s=new Stack();
s.push('A');
s.push('B');
s.push('C');
console.log(s.count);
console.log(s.pop());
console.log(s.count);
console.log(s.peek());
console.log(s.count);
console.log(s.pop());
console.log(s.pop());
console.log(s.count);