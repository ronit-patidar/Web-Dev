function createcounter(){
    var count=0;
    return function(){
        return ++count;
    }
}
var counter=createcounter();
console.log(counter());
console.log(counter());
console.log(counter());
