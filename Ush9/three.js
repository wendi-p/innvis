document.getElementById("button1").addEventListener("click",hide);
document.getElementById("button2").addEventListener("click",show);
function hide()
{ var x = document.getElementById('hide');
  x.style.display = 'none';
}
function show()
{ var x = document.getElementById('hide');
  x.style.display = 'block';
}
function table(x)
{ alert("The Row Number Clicked is: " + x.rowIndex);
}