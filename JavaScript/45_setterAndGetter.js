var ans = (function(){
    var privateVal;
    return{
        setter:function(val){
            privateVal=val;
        },
        getter:function(val){
            console.log(privateVal);
        },
        logPrivateVal:function(){
            console.log(privateVal);
        }
    }
})();
ans.getter();