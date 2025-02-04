function yHandler()
{ var wrap = document.getElementById('wrap'); //get wrap element
  var contentHeight = wrap.offsetHeight; //wrap element's height
  var yOffset = window.pageYOffset; //current verticle position of user
  var y = yOffset + window.innerHeight; //window height + current position
  if(y >= contentHeight)
  { wrap.innerHTML += '<div class="newData"></div>'; //Add the next element
  }
  var status = document.getElementById('status'); //get status element
  status.innerHTML = contentHeight + " | " + y; //update status element
}
window.onscroll = yHandler; // Whenever user scrolls page, call yHandler function