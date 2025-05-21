var arr=[{
    username:"ronit",
    canCode:true,
    age:220
},{
    username:"aman",
    canCode:true,
    age:20
},{
    username:"sid",
    canCode:true,
    age:20
}];
let sum=0;
let sum2='';
let sum3=false;
arr.forEach((value)=>{
    sum += value.age;
    sum2 += value.username;
    sum3 += value.canCode;
})
console.log(sum);
console.log(sum2);
console.log(sum3);