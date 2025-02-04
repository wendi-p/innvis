function fun1()	
{ var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    { myObj = JSON.parse(this.responseText);
      for(i=0; i < myObj.details.length; i++)
      { var name = myObj.details[i].name;
        var age  = myObj.details[i].age;
        var marks = myObj.details[i].marks;
        if (i == 0)
        { var row11 = document.getElementById("row11");
        var row12 = document.getElementById("row12");
        var row13 = document.getElementById("row13");
        row11.innerHTML = name;
        row12.innerHTML = age;
        row13.innerHTML = marks;
        }
        if (i == 1)
        { var row21 = document.getElementById("row21");
        var row22 = document.getElementById("row22");
        var row23 = document.getElementById("row23");
        row21.innerHTML = name;
        row22.innerHTML = age;
        row23.innerHTML = marks;
        }
        if (i == 2)
        { var row31 = document.getElementById("row31");
        var row32 = document.getElementById("row32");
        var row33 = document.getElementById("row33");
        row31.innerHTML = name;
        row32.innerHTML = age;
        row33.innerHTML = marks;
        }

      }
    }
  };
  xmlhttp.open("GET","jsonfile.json",true);
  xmlhttp.send();
}	