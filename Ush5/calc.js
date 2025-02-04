function sum()
{
	var x = document.getElementById('input1').value;
	var y = document.getElementById('input2').value;
	var z = parseInt(x) + parseInt(y);
	document.getElementById('result').innerHTML = z;
}
function subtract()
{
	var x = document.getElementById('input1').value;
	var y = document.getElementById('input2').value;
	var z = parseInt(x) - parseInt(y);
	document.getElementById('result').innerHTML = z;
}
function multiply()
{
	var x = document.getElementById('input1').value;
	var y = document.getElementById('input2').value;
	var z = parseInt(x) * parseInt(y);
	document.getElementById('result').innerHTML = z;
}
function divide()
{
	var x = document.getElementById('input1').value;
	var y = document.getElementById('input2').value;
	var z = parseInt(x) / parseInt(y);
	document.getElementById('result').innerHTML = z;
}
function clearfields()
{
	document.getElementById('input1').value = '';
	document.getElementById('input2').value = '';
	document.getElementById('result').innerHTML = '';
}
function rev()
{ var string = document.getElementById('input3').value;
  var newString = "";
  
  for (var i = string.length - 1; i>=0; i--)
  { newString += string[i];
  }
  
  document.getElementById('output1').innerHTML = newString;
}