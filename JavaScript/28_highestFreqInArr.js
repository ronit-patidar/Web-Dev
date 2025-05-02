var arr=[1,2,3,4,5,6,6,6,6];
const frequency={}; // empty object to store freq
for(var ele of arr){
    frequency[ele]=(frequency[ele] || 0) + 1;
}
console.log(frequency);

var highestFreq=0;
var highestFreqEle=0;
for(var key in frequency){
    if(frequency[key]>highestFreq){
        highestFreq=frequency[key];
        highestFreqEle=key;
    }
}

//  for of loop used to iterate over the array
// for in loop used to iterate over the object(or index of array)