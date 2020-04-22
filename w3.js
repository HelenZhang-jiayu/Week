function showCoords(event) {
  
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  
  changeCanvasPosition(x, y);
}

function changeCanvasPosition(w, h) {
  var canvas = document.getElementById("box");
  canvas.style.top = w + "px"; 
  canvas.style.left = h + "px"; 
  // canvas.style.right = w - "px"; 
  // canvas.style.bottom = h - "px"; 
}

function clearCoor() {
  // document.getElementById("demo").innerHTML = "";
}
