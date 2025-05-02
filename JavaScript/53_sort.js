var arr=[1,5,2,3,4];
var ans = arr.sort(function(a,b){ // here copy is not created of array
    return b-a;
    // a-b = asc
    // b-a = des
})
console.log(arr);
console.log(ans);
