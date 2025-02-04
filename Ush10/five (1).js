function emaillogin()
{ var emailid = document.getElementById("email").value;
  var passwd = document.getElementById("password").value;
  var regexemail = /^[a-zA-Z0-9]*$/;
  var regexpwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (regexemail.test(emailid))
  { alert("email id is valid.");
  }
  else
  { alert("email id is invalid");
  }
  if (regexpwd.test(passwd))
  { alert("Password is valid");
  }
  else
  { alert("Password is invalid");
  }
}

function emailcancel()
{ document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}