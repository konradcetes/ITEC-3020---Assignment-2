
function createRandomColors(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var randomboxcolor = "rgb(" + x + "," + y + "," + z + ")";
  return randomboxcolor;
}

function createRandomnPositions() {
 var container = document.getElementById("container");
  for(i = 1; i<=100; i++){
    var newDiv = document.createElement("div");
    container.appendChild(newDiv);
    var topProperty = Math.floor(Math.random() * 400);
    var leftProperty = Math.floor(Math.random() * 400);
    var randColor = createRandomColors();

    newDiv.style.top = topProperty + "px";
    newDiv.style.left = leftProperty + "px";
    newDiv.style.position = "Absolute";
    newDiv.style.backgroundColor = randColor;
    newDiv.style.width = 100 + "px";
    newDiv.style.height = 100 + "px";
    newDiv.setAttribute('onmouseover', "removechild(this)");
  }
}


function removechild(divToRemove){
var childCount = document.getElementById("container").childElementCount;
    if(childCount > 1){
    divToRemove.remove();
  }else{
    alert("Last one");
  }
}
