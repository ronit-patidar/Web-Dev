class MobileShop{
    constructor(){
        this.mobile=[];
    }
    addMobile(mobile){
        this.mobile.push(...mobile);
    }
    removeMobile(Mobile){
        this.mobile = this.mobile.filter(mob => mob != Mobile);
    }
    info(){
        this.mobile.forEach(function(mob){
            console.log(`Mobile model is ${mob.model} , price is ${mob.price} , brand is ${mob.brand} , storage is ${mob.storage} , color is ${mob.color}. \n`);
        })
    }
    countMobile(){
        console.log(`The count of mobiles in shop is ${this.mobile.length}`);
    }
    checkModel(model){
        var flag=false;
        this.mobile.forEach(function(mob){
            if(mob.model==model) flag=true;
        })
        console.log(flag);
    }
}
class Mobile{
    constructor(model,price,brand,storage,color){
        this.model=model;
        this.price=price;
        this.brand=brand;
        this.storage=storage;
        this.color=color;
    }
}
// obj of mobile class
let m1=new Mobile('x1',20000,'realme','32gb','white');
let m2=new Mobile('x2',25000,'realme','64gb','blue');
let m3=new Mobile('x3',30000,'realme','128gb','silver');
let m4=new Mobile('x4',35000,'realme','256gb','black');
let m5=new Mobile('x5',40000,'realme','512gb','gold');

let ms=new MobileShop(); // obj of mobileShop
ms.addMobile([m1,m2,m3,m4,m5]); // adding obj
ms.countMobile(); // count
ms.checkModel('x5'); // check model available or not
ms.info(); // info
ms.removeMobile(m1); // remove mobile m1
ms.info(); // info
