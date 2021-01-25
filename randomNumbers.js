// Generate random numbers between 1 to 6

function generateRandom(n){
    var i,value;
    for(i = 0; i < n ; i++){
        value = (Math.round(Math.random() * 10)) % 6;
        console.log(value);
    }
}

generateRandom(10);