function arrayMax(newArray){
  let sum = 0; 
  let i;

  for(i = 0; i < newArray.length; i++){
      sum += newArray[i];
  }

  return sum;
}

let newArray = [4,1,7,9,8,5];
console.log("Given Array: "+ newArray);
const sumOfArray = arrayMax(newArray);
console.log("Sum of Array Elements = "+ sumOfArray);