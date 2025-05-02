function fnlimiter(func,limit){
    var totalcount=0;
    return function(){
       if(totalcount<limit){
        totalcount++;
        func();
       }
       else{
        console.warn("limit,reached");
       }
    }
}
var limit=fnlimiter(function(){
    console.log("hello");
},2)
limit();
limit();
limit();
limit();
