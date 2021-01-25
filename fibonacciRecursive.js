/*
    recursive way
    fibonacci series:
        0,1,1,2,3,5,8,13,21,34
        logic , new = prev + prev
*/

function fibonacci(n){
    if(n == 0)
      return [0];

    if(n == 1)
      return [0,1];

    else{
      fibo = fibonacci(n-1);
      nextElement = fibo[n-1] + fibo[n-2];
      fibo.push(nextElement);
      return fibo;
    }
}

let fiboResult = fibonacci(10);
console.log(fiboResult);