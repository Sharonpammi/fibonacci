
var result, inputValue;

getFibonacciNumber = function() {
	inputValue = document.getElementById("inputValue").value;
	result = returnFibonacciNumber(inputValue);
	document.getElementById("displayFibonacciNumber").innerHTML = "The value of the fibonacci number is: " + result;
}

function returnFibonacciNumber(number){
  var temp_variable_a = 0, temp_variable_b = 1, temp_variable_c;

  while (number >= 0){
    temp_variable_c = temp_variable_a;
    temp_variable_a += temp_variable_b;
    temp_variable_b = temp_variable_c;
    number--;
  }

  return temp_variable_b;
}	

/****** Recursive Solution *******/

// function return_fibonacci_number(num){
// 	if (num === 0) return 0;
// 	if (num === 1) return 1;
// 	return return_fibonacci_number(num - 1) + return_fibonacci_number(num - 2);	
// }
//setTimeout( return_fibonacci_number, 1000);

