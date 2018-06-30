function max_min_avg(arr){
    max = arr[0];
    min = arr[0];
    sum = 0;
    newstring = "";
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        if (min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
    }
    avg = sum/arr.length;
    newstring += "the maximum is: " + max + ", ";
    newstring += "the minimum is: " + min + ", ";
    newstring += "the average is: " + avg + ", ";
    console.log(newstring);
    return newstring;
}
max_min_avg([2,6,2,0,16,11]);