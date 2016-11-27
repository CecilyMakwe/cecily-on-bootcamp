module.exports={
findMinMax: function  (myArray){
    if (myArray.length == 0){
        return ('EMPTY ARRAY!!!');
    }   
    else{
            var minVal = myArray[0];
            var maxVal = myArray[0];
            for (var i = 0; i<myArray.length; i++){
                minVal = Math.min(minVal, myArray[i]);
                maxVal = Math.max(maxVal, myArray[i]);
            }
            if (minVal == maxVal){
                return ([minVal]);
            }   
            else{
                    return ([minVal, maxVal]);
            }           
}
}
}