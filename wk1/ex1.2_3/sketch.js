
let color = prompt("Pick a color to draw a circle with the mouse. What color do you want the circle? Dragging mouse will draw grey ellipse");

function setup() {
  createCanvas(800, 600);
}


function draw() {
  if (mouseIsPressed) {
    fill(color);
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(200);
    ellipse(mouseX, mouseY, 50, 25,);
  }
  
}



