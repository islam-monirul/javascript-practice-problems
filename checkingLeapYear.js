/*
    leap year conditions:
      if divisible by 400 -> leap year
      else if divisible by 4 but not divisible by 100 -> leap year
*/

function checkLeapYear(year){
    if(year % 400 == 0){
      return true;
    }
    
    else if(year % 4 == 0 && year % 100 != 0){
      return true;
    }

    else{
      return false;
    }
}

const givenYear = 2032;
let leapYear = checkLeapYear(givenYear);

if(leapYear){
    console.log(givenYear + ' is ' + 'leap year.');
}
else{
    console.log(givenYear + ' is ' + 'not ' + 'leap year.');
}