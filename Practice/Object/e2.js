//value vs Reference

let x=5;
let y=x;

x=100;
console.log(x);
console.log(y);
console.log(`--------------------`);

let a={id:2};
let b=a;

a.id=100;
console.log(a);
console.log(b);
