function Circle(radius,diameter){
    this.radius=radius;
    this.diameter=diameter;
    this.area=function(){
    return Math.PI*this.radius*this.radius;
   }
   }
   let c1=new Circle(15,30);
   for(let keys in c1)
   console.log(keys);
   console.log(`-----------------`);
   for(let keys in c1)
   console.log(keys,c1[keys]);
   console.log(`-----------------`);
   let a=Object.keys(c1);
   console.log(a);
   console.log(`-----------------`);
   if('radius' in c1){
       console.log('Yes');
   }
