function load()
{ var select = document.getElementById("elements");
  var options = ["324","234","fdgf","GGSr","246"];
  for(var i = 0; i < options.length; i++) 
  { var opt = options[i];
    var insertElement = document.createElement("option");
    insertElement.textContent = opt;
    insertElement.value = opt;
    select.appendChild(insertElement);
  }
}
function loadnum()
{ var select = document.getElementById("elements");
  var options = ["2","4","10","60","1","20","100"];
for(var i = select.length - 1 ; i >= 0 ; i--)
  { select.remove(i);
  }  
for(var i = 0; i < options.length; i++) 
  { var opt = options[i];
    var insertElement = document.createElement("option");
    insertElement.textContent = opt;
    insertElement.value = opt;
    select.appendChild(insertElement);
  }
}
function sort()
{ var select = document.getElementById("elements");
  var options = [];  
for (var k = 0; k < select.length;  ++k)
  { options[k] = select.children[k].value;
  }  
for(var i = select.length - 1 ; i >= 0 ; i--)
  { select.remove(i);
  }  
options.sort(function(a, b){return a-b});
for(var i = 0; i < options.length; i++) 
  { var opt = options[i];
    var insertElement = document.createElement("option");
    insertElement.textContent = opt;
    insertElement.value = opt;
    select.appendChild(insertElement);
  }
}
function addrock()
{ var select = document.getElementById("elements");
  var options = ["Jazz","Blues"];
  for (var i = select.length - 1; i >= 0; i--)
  { select.remove(i);
  }

  options.push("Rock’n’Roll");

  for (i = 0; i < options.length; ++i)
  { var opt = options[i];
    var insertElement = document.createElement("option");
    insertElement.textContent = opt;
    insertElement.value = opt;
    select.appendChild(insertElement);
  }
}
function addclassic()
{ var select = document.getElementById("elements");
  var options = ["Jazz","Rock 'n' Roll","Blues"];
  for (var i = select.length - 1; i >= 0; i--)
  { select.remove(i);
  }
  options.splice(1,1,"Classic");
  for(i = 0; i < options.length; ++i)
  { var opt = options[i];
    var insertElement = document.createElement("option");
    insertElement.textContent = opt;
    insertElement.value = opt;
    select.appendChild(insertElement);
  }
}
function alertlast()
{ var select = document.getElementById("elements");
  var options = [];
  for (var i = 0; i < select.length; ++i)
  { options[i] = select.children[i].value;
  }
  var last = options.pop();
  alert(last);
}
// String Contains Only Numbers and Characters
function searchRegex()
{ var string = document.getElementById('input1').value;
  var regex = /^[0-9a-zA-Z]+$/;
  if (string.search(regex) != -1)
  { document.getElementById('output6').innerHTML = "String Contains Only Numbers and Characters";
  }
  else
  { document.getElementById('output6').innerHTML = "String Contains Special Characters too...";
  }
}
// Minimum eight characters, at least one letter and one number
function searchRegex2()
{ var string = document.getElementById('input1').value;
  var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (string.search(regex) != -1)
  { document.getElementById('output6').innerHTML = "String Contains Minimum eight characters, at least one letter and one number";
  }
  else
  { document.getElementById('output6').innerHTML = "Condition Minimum eight characters, at least one letter and one number is not valid...";
  }
}