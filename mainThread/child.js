function fn(n){
    if(n<=2){
        return 1
    }else{
        return fn(n-1)+fn(n-2);
    }
}

this.onmessage=function(ev){
    var n=ev.data;
    this.postMessage(fn(n));
};


