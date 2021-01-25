/*
    factorial using for loop (iterative method)
    factorial : 
      5! = 5 * 4 * 3 * 2 * 1
*/

function calculateFactorial(givenNumber){
    let iteration, factorialValue = 1;
    for(iteration = givenNumber; iteration >= 1; iteration--){
          factorialValue = factorialValue * iteration ;
    }

    return factorialValue;
}

const number = 8 ;
let getFactorial = calculateFactorial(number);
console.log(getFactorial); 