

function result() {
	var number1 = document.getElementById("number1");
	var number2 = document.getElementById("number2");
	var result = document.getElementById("result");
	
formule = ((87.03 - ((Number(number1.value) + Number(number2.value)) / 2)) /2)

result.value = (Math.ceil(formule * 2) / 2)

};


function clearFunction() {
	
	var number1 = document.getElementById("number1");
	var number2 = document.getElementById("number2")
	var result = document.getElementById("result");
	
	number1.value = "";
	number2.value = "";
	result.value = "";
	
};


function result2() {
  var number3 = document.getElementById("number3");
  var number4 = document.getElementById("number4");
  var number5 = document.getElementById("number5");
  var result2 = document.getElementById("result2");
  
  result2.value = (Math.ceil(((((Number(number3.value) + Number(number4.value)) / 2) * (1/3)) + ((2/3) * Number(number5.value)))))
  
};


function clearFunction2() {
	
	var number3 = document.getElementById("number3");
	var number4 = document.getElementById("number4")
	var number5 = document.getElementById("number5")
	var result2 = document.getElementById("result2");
	
	number3.value = "";
	number4.value = "";
	number5.value = "";
	result2.value = "";
	
};


		
		