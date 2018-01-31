var worker=new Worker("js/prime.js");
worker.addEventListener("message",function(ev){
    var primeNumber=ev.data*1;
    console.log(primeNumber);
});