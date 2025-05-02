var arr=[1,2,3,4,5,6,6,6,6];
const frequency={}; // empty object to store freq
for(var ele of arr){
    // The reason why frequency[ele]++ is not used here is that frequency[ele] might initially be undefined 
    // for elements that are not yet present in the frequency object. Attempting to increment undefined 
    // with ++ would result in NaN (Not a Number).
    // Using (frequency[ele] || 0) ensures that if frequency[ele] is undefined, it defaults to 0. 
    // This way, the addition operation (frequency[ele] || 0) + 1 works correctly and avoids errors.
    frequency[ele]=(frequency[ele] || 0) + 1;
}
console.log(frequency);