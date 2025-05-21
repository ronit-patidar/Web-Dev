const pr = new Promise(function(res,rej){
   console.log("A");
   console.log("A");
   console.log("Error");
//    rej(); // catch chalega
  res(); // then chalega
}); 
pr.then(function(){
    console.log("Resolved");
}).catch(function(){
    console.log("Rejected");
});