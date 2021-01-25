function findMax(num1,num2){
  if(num1 == num2){
    return -1;
  }

  else if(num1 > num2){
    return num1;
  }

  else{
    return num2;
  }
}


const number1 = 28;
const number2 = 28;
console.log("Given Numbers: ", number1 +" , "+ number2);
let result = findMax(number1,number2);
if(result == -1){
  console.log("Both given numbers are equal.");
}

else{
  console.log(result + " is the largest number.");
}

