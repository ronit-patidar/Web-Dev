// ... -> spread operator (spread kar do elements ko ) 
// remove duplicates in array by using inbuilt func
var containDuplicates =[1,1,1,1,1,1,2,2,2,2,2,3,4,5,5,5,5];
var uniqueEle = [...new Set(containDuplicates)]  // array    
console.log(uniqueEle);
