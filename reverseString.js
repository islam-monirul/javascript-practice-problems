function reverseString(newString){
    let reversedString =  "";
    let i;
    for(i = 0; i < newString.length; i++){
          let char = newString[i];
          reversedString = char + reversedString;
    }

    return reversedString;
}

let newString = "My name is Monir. I am a web developer." ;
let reversed = reverseString(newString);
console.log(reversed);