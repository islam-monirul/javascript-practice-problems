function inchToFeet(inch){
   let feet = parseInt(inch / 12);
   let remainingInch = inch % 12;

   console.log(feet + ' feet ' + remainingInch + ' inches.');
}

inchToFeet(175);
inchToFeet(67);
