
// 1,1,2,3,5,8

function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1) + fib(n-2)

}

console.log(fib(5))
