var worker=new Worker("js/prime.js");

var observable=Rx.Observable.fromEvent(worker,"message")
.map(function(ev){
    return ev.data*1;
})
.buffer(Rx.Observable.interval(500))
where(function(x){
    return x.length>0;
})
.map(function(x){
    return x.length;
});
/*

worker.addEventListener("message",function(ev){
    var primeNumber=ev.data*1;
    console.log(primeNumber);
});
*/