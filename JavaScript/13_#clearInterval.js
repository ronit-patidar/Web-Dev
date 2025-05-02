  // 8. clearInterval
  const c=setInterval(function(){
    console.log("This ends after 5 seconds and execute every  second.")
  },500);
  setTimeout(function(){
    clearInterval(c);
  },5500);
  