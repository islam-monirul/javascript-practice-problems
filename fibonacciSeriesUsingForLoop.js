/*
    iterative way
    fibonacci series:
        0,1,1,2,3,5,8,13,21,34
        logic , new = prev + prev
*/

function fibonacci(n){
    let fiboArray = [0,1];
    let iteration;

    for(iteration = 2; iteration <= n; iteration++){
          fiboArray[iteration] = fiboArray[iteration - 1] + fiboArray[iteration - 2];
    }

    return fiboArray;
}

const fiboResult = fibonacci(10);
console.log(fiboResult);