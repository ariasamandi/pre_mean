function fizzbuzz(n){
    newstring = "";
    if(n > 0){
        for(var i = 1; i <= n; i++){
            if(i % 3 === 0 && i % 5 === 0){
                newstring += "FizzBuzz, ";
            }
            else if(i % 3 === 0){
                newstring += "Fizz, ";
            }
            else if(i % 5 === 0){
                newstring += "Buzz, ";
            }
            else{
                newstring += i + ", ";
            }
        }
    }
    else{
        console.log("number must be positive");
        return "number must be positive";
    }
   console.log(newstring);
    return newstring;
}

fizzbuzz(-3);