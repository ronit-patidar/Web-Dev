function thort(func,delay){
    let lastcall=0;
    return function(){
        let current = Date.now();
        if(current-lastcall >= delay){
            lastcall = current;
            func();
        }
    }
}
var ans = thort(function(){
    console.log("will run after delay of  5 seconds");
},5000);
ans();