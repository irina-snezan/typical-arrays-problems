
exports.min = function min (array) {
  if(array === undefined) {
	  return 0;
	} else if (array.length === 0) {
		return 0;
	} else {
	let min = array[0];
	for(let i=1; i<array.length; i++){
		if(array[i]<min) {min = array[i];}
	}
	return min;
	}  
}

exports.max = function max (array) {
	 if(array != undefined && array.length != 0) {
	let max = array[0];
	for(let i=1; i<array.length; i++){
		if(array[i]>max) {max = array[i];}
	}
	return max;
	} else return 0;
}

exports.avg = function avg (array) {
	if(array === undefined) {
	  return 0;
	} else if (array.length === 0) {
		return 0;
	} else {
		let avg = 0;
		for(let i=0; i<array.length; i++){
			avg += array[i];
		}
		avg = avg / array.length;
	return avg;
	}  
  
}
