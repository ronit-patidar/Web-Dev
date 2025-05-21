// This is called callback hell
function stepOne(cb){
    console.log("step 1");
    cb();
}
function stepTwo(cb){
    console.log("step 2");
    cb();
}
function stepThree(cb){
    console.log("step 3");
    cb();
}
stepOne(()=>{
    stepTwo(()=>{
        stepThree(()=>{
            console.log("All callback called");  
        })
    })
})