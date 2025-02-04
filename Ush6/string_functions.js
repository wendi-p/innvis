function cap()
{ var string = document.getElementById('input1').value;
  var newString = string.charAt(0).toUpperCase() + string.slice(1);
  document.getElementById('output2').innerHTML = newString;
}

function search()
{ var string = document.getElementById('input1').value;
  var njs = string.indexOf("vishal");
  var najs = string.indexOf("khamuruddin");
  if (njs > 0)
  { document.getElementById('output3').innerHTML = "Vishal word is present";
  }
  else
  { document.getElementById('output3').innerHTML = "Vishal word is not present";
  }
  if (najs > 0)
  { document.getElementById('output4').innerHTML = "Khamuruddin word is present";
  }
  else
  { document.getElementById('output4').innerHTML = "Khamuruddin word is not present";
  }
  if (njs <= 0 && najs <= 0)
  { return false;
  }
  else
  { return true;
  }
}	

function manipulateStringByLength()
{ var string = document.getElementById('input1').value;
  var len = string.length;
  var newString = string;
  if (len > 10)
  { // newString = string.substr(0,10) + "...";
	newString = string.substr(5,8) + "...";
  }
  document.getElementById('output5').innerHTML = newString;
}

