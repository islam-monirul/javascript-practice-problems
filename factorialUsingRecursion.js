/*
    factorial using for loop (recursive method)
    factorial : 
      5! = 5 * 4 * 3 * 2 * 1
*/

function calculateFactorial(givenNumber){
  //base condition
  if(givenNumber == 0){
      return 1;
  }

  else{
    return givenNumber * calculateFactorial(givenNumber - 1);
  }
  
}

const number = 3 ;
let getFactorial = calculateFactorial(number);
console.log(getFactorial); 