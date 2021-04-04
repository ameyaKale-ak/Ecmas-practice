//stsic methods
class Mobile{
constructor(type){
    this.type=type;
}
static print(){
    console.log(`This method is static and static methods are used as utilities`);
}

}
 let m=new Mobile('Smart Type');
 Mobile.print();// we can call static methods by using class reference
