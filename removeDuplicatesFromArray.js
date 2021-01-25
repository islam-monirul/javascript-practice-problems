const newArray = [3,6,2,7,2,6,6,7,9,0];
let uniqueArray = [];
let iteration;

for(iteration = 0; iteration < newArray.length; iteration++){
    let element = newArray[iteration];
    let getIndex = uniqueArray.indexOf(element);
    if(getIndex == -1){
      uniqueArray.push(element);
    }
}

console.log("Previous Array : ", newArray);
console.log("New Array : ", uniqueArray);