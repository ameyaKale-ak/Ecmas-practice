
import {Car} from './es61.js';

let car1=new Car('Electric');
console.log(car1.showType);
car1.setType='Petrol';
console.log(car1.showType);
// will onlywork if there is type= module in package.json