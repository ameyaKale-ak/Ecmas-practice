class Stack{
    constructor(){
        this.count=0;
        this.s=[];
    }
    push(value){
        if(this.isEmpty())
        throw new Error('Satck is empty');
        this.s.push(value);
        this.count++;
    }
    pop(){
      let p= this.s.pop();
       this.count--;
       return p;
    }
    peek(){
        let l=this.s.length;
       return this.s[l-1];
    }
    isEmpty(){
        if(this.count===0);
        return true;
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
console.log(s.pop());
console.log(s.count);