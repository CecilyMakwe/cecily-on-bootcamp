module.exports={
aritGeo:function  (myArray){

	if (myArray.length == 0){
		return (0);
	}
	else if (((myArray[1] - myArray[0]) == (myArray[2] - myArray[1])) && ((myArray[1] - myArray[0]) == (myArray[3] - myArray[2])) ){
		return ('Arithmetic');
	}	
	else if ((myArray[1] / myArray[0]) == (myArray[2] / myArray[1])){
		return ('Geometric');
	}
	else {
		return (-1);
	}		
}
}