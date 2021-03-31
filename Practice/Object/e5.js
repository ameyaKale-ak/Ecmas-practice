function Circle(radius){
    let color='red';
    let d=30; 
    this.radius=radius;

    this.getcalD=function(){
        return d;
    };

    this.area=function(){
    return Math.PI*this.radius*this.radius;
    };

   Object.defineProperty(this,'calD',{
    get:function(){
        return d;
    }
   });

   }

   let c1=new Circle(15);
   console.log(c1.radius);
   console.log(c1.calD);