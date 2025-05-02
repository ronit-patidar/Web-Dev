// foreach in javaScript
// return in foreach is not allowed 
// traverse/log for every element present ins araay

// eg 1
var arr=[1,2,3,4,5,6,7];
arr.forEach(function(value){
    console.log(value);
})
// eg 2
const fruits=["apple","banana","graphes","mango"]
fruits.forEach((fruits,index) => {
    console.log(index+':'+fruits);
})
// eg 3
var arr=[1,2,3,0,'ronit_patidar'];
var ans = arr.forEach(function(value){
    return value;
})

