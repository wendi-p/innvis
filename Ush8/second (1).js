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
//options.sort();
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
