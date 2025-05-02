

// reduce  (reduce in single value )

// addition of array
var a=[1,2,3,4,5];
var ans = a.reduce(function(accumulater,key){
   return accumulater+key;
    //    this line means accumulater+key ko accumulatter me daal do
   // initialialy key = 0; 
   // 0 + 1
   // 1 + 2
   // 3 + 3
   // 6 + 4
   // 10 + 5
},0)

// multiplication of array
var a=[1,2,3,4,5];
var ans = a.reduce(function(accumulater,key){
   return accumulater*key;
    //    this line means accumulater+key ko accumulatter me daal do
   // initialialy key = 1; 
   // 1*1=1
   // 1*2=2
   // 2*3=6
   // 6*4=24
   // 24*5=120(array ends return 120)
},1)
