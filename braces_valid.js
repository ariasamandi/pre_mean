function braces(str){
    paren_count = 0;
    curly_count = 0;
    bracket_count = 0;
    for(var i = 0; i < str.length; i++){
           console.log(str[i]);
        if(str[i] == "{"){
            curly_count += 1;
            if(curly_count < 0){
                console.log("false");
          }
        }
        if(str[i] == "("){
            paren_count += 1;
            if(paren_count < 0){
                console.log("false");
          }
        }
        if(str[i] == "["){
            bracket_count += 1;
            if(bracket_count < 0){
                console.log("false");
          }
        }
        if(str[i] == "}"){
            curly_count -= 1;
            if(curly_count < 0){
                console.log("false");
                return "false";
          }
        }
        if(str[i] == ")"){
            paren_count -= 1;
            if(paren_count < 0){
                console.log("false");
                return "false";
          }
        }
        if(str[i] == "]"){
            bracket_count -= 1;
            if(bracket_count < 0){
                console.log("false");
                return "false";
          }
        }
    }
    console.log(paren_count);
    console.log(bracket_count);
    console.log(curly_count);
    console.log("true");
    return "true";
  }
  braces("{()}");