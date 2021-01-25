/*
    1-10 miles : 50 animals per mile
    11-20 miles : 100 animals per mile
    > 20 miles : 300 animals per mile
*/

function animalCounter(depth){
    var animal = 0;
    if(depth <= 10){
      animal = depth * 50;
    }
    else if(depth <= 20){
      var firstPart = 10 * 50;
      var remaining = depth - 10;
      var secondPart = remaining * 100;
      animal = firstPart + secondPart;
    }

    else{
      var firstPart = 10 * 50;
      var secondPart = 10 * 100;
      remaining = depth - 20;
      thirdPart = remaining * 300;
      animal = firstPart + secondPart + thirdPart;
    }

    return animal;

}

var depth = 32;
var result = animalCounter(depth);
console.log(result);