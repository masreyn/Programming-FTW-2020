function setup() {
  createCanvas(1200, 800);
}

alert("Press mouse to draw a circle");

function draw() {
  if (mouseIsPressed) {
    fill("salmon");
    noStroke();
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(0);
    noStroke();
  }
}