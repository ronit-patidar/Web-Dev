function abcd(func,n){
    setInterval(func,n*1000);
    // this will log every n seconds
    // setTimeout(func,n*1000);
    // this will log after n seconds
}
abcd(function(){
    console.log("This will log every n seconds")
},1)
