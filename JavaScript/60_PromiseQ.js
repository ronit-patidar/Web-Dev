function pr(cb){
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            let chance = Math.random() < 0.5;
            if(chance) res();
            else rej();
        },2000);
    })
}
pr().then(()=>{console.log(" 🍕Pizza delivered")}).catch(()=>{console.log("🚚❌Delivery failed")})