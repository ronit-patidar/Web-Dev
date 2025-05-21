function fakeApiCall(endpoints){
    const data = {
       users : ["harsh","sarthak","ankur"],
       posts : ["hey champs","hi,there","hello "]
    }
    let delay = Math.random() * 2000 + 1000 ;
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res(data[endpoints]);
        },delay);
    });
}
fakeApiCall("users").then((data)=>{
    console.log(data); 
});
fakeApiCall("posts").then((data)=>{
    console.log(data);
});