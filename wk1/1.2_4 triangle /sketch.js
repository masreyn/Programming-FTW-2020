
let color = prompt("What color do you want ellipse? The triangle will be grey")

function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(color);
    ellipse(mouseX, mouseY, 80, 80);
  } else 
    fill(200);
    //rect(mouseX, mouseY, 82, 33,);
  triangle(mouseX, mouseY, 200, 18, 351, 150, 288, 160);
  
}
