function arrayMax(newArray){
  let maxValue = newArray[0];
  let i;

  for(i = 1; i < newArray.length; i++){
      if(newArray[i] > maxValue){
        maxValue = newArray[i];
      }
  }

  return maxValue;
}

let newArray = [4,1,7,9,8,5];
console.log("Given Array: "+ newArray);
const maxArrayValue = arrayMax(newArray);
console.log("Max Value in the Given Array = "+ maxArrayValue);