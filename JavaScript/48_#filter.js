// filter 

// imagine blank array and return if true then insert original array value 
// if false then dont insert 
var a=[0,2,4,3,2,4,3,4,2,4,33];
var ans = a.filter(function(value){
    return value%2==0 ; // 0,2,4,2,4,4,2,4
})
console.log(ans);

// let take another example 
var a=[1,2,3,4,5];
var ans=a.filter(function(value){
    return value===3;
});
