function stepOne(cb){
    return new Promise(function(res,rej){
        console.log("step 1");
        res();
    })
}
function stepTwo(cb){
    return new Promise(function(res,rej){
        console.log("step 2");
        res();
    })
}
function stepThree(cb){
    return new Promise(function(res,rej){
        console.log("step 3");
        res();
    })
}
stepOne().then(stepTwo).then(stepThree).then(()=>{
    console.log("All steps done.");
});