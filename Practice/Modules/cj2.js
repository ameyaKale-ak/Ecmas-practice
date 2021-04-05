// import { createRequire } from 'module';
// const require=createRequire(import.meta.url);
let C=require('./cj1');

let car1=new C('Electric');
console.log(car1.showType);
car1.setType='Petrol';
console.log(car1.showType);
// will not work if we have type= module in package.json