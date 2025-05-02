function callerfunc(fn){
    setTimeout(fn,3000);// 3 sec baad chalega 
}
callerfunc(function(){console.log("Hello,hi there")});

