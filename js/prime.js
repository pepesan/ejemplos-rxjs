function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two second later');
}

(async function(start,end){
    var n=start-1;
    while(n++<end){
        var k=Math.sqrt(n);
        var found=false;
        for(var i=2; !found && i<=k;++i){
            found=n%i===0;
        }
        if(!found){
            await sleep(2000);
            postMessage(n.toString());
        }
    }
}
)(2,1e10);