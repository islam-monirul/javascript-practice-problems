/*
    factorial using while loop
    factorial : 
      5! = 5 * 4 * 3 * 2 * 1
*/

function calculateFactorial(givenNumber){
  let iteration = givenNumber, factorialValue = 1;
  while(iteration >= 1){
    factorialValue *= iteration ;
    iteration--;
  }
  return factorialValue;
}

const number = 3 ;
let getFactorial = calculateFactorial(number);
console.log(getFactorial); 