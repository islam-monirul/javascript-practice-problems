const newString = "My name is Monir. I am a web developer." ;
let count = 0, i;

for(i = 0; i < newString.length; i++){
      let char = newString[i];
      if(char == " " && newString[i-1] != " "){
          count++;
      }
}

count++;
console.log("No. of words in given String: "+ count);