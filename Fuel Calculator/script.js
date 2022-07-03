

function result() {
	var number1 = document.getElementById("number1");
	var number2 = document.getElementById("number2");
	var number3 = document.getElementById("number3");
	var result = document.getElementById("result");
	
	
	
	result.value = (Math.round(((((Number(number1.value)/100) * Number(number2.value))*Number(number3.value)) * 100))) / 100
	
	
};

function clearFunction() {
	
	var number1 = document.getElementById("number1");
	var number2 = document.getElementById("number2");
	var number3 = document.getElementById("number3");
	var result = document.getElementById("result");
	
	number1.value = "";
	number2.value = "";
	number3.value = "";
	result.value = "";
	
};