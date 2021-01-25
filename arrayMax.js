let newArray = [4,1,7,2,8,5];
console.log("Given Array: "+ newArray);

// sort array in ascending order
newArray.sort(function(a,b){ return b-a});

console.log("Max Value in the Given Array = "+ newArray[0]);