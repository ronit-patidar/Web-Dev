function getUser(){
    return new Promise((res,rej) => {
        setTimeout(function(){
            res({id:1,name:"ronit"});
        },1000);
    });
}
function getPosts(userId){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(["title 1","title 2"]);
        },1000)
    });
}
function getComments(postId){
    return new Promise((res,rej)=>{
        setTimeout(function(){
           res(["great post","amazing content","you rocked"]);
        },1000)
    });
}
// flat chaining
getUser()
.then(function(data){
   console.log(data);
   return getPosts(data.id);
})
.then(function(titles){
    console.log(titles);
    return getComments("ajnajn");
})
.then(function(cmts){
    console.log(cmts);
})
.finally(function(){
    console.log("All data fetched");
})