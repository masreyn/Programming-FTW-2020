// Assignment 11A -Themes of Computational Aesthetics
// Sketch 2 - Repeat w. Paramatorize, translate, scale
function setup () {
  createCanvas(725, 540);
  background(50, 89, 100);
}
function createCell (orginX, orginY, largeCircle, ball1, ball2) {
  translate(orginX, orginY);
  fill(50, 89, 100);
  rect(0, 0, 725, 540);
  rect(0, 0, 200, 200);
  // //cell set object
  // circle - large
  noFill();
  stroke(largeCircle);
  strokeWeight(4);
  circle(125, 125, 200);
  // ball 1
  noStroke();
  fill(ball1);
  ellipseMode(CENTER);
  translate(57, 50);
  translate(p5.Vector.fromAngle(millis() / 1000, 39));
  ellipse(50, 50, 30);
  // ball 2
  fill(ball2);
  ellipseMode(CENTER);
  translate(15, 5);
  translate(p5.Vector.fromAngle(millis() / 1000, 15));
  ellipse(25, 75, 30);
  scale(0.70);
} // end fxn createCell
  // instances of object
function draw () {
  createCell(0, 0, 'white', 'yellow', 'red');
  createCell(235, 275, 'white', 'yellow', 'red');
  createCell(300, -300, 'white', 'yellow', 'red');
  createCell(54, 410, 'white', 'yellow', 'red');
}
