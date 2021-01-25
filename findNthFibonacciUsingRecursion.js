/*
    recursive way to find nth Fibonacci
    fibonacci series:
        0,1,1,2,3,5,8,13,21,34
        logic , new = prev + prev
*/

function fibonacci(n){
  if(n == 0)
    return 0;

  if(n == 1)
    return 1;

  else
    return fibonacci(n-1) + fibonacci(n-2);
}

let fiboResult = fibonacci(10);
console.log(fiboResult);