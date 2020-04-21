var y = 75;
var x = 75;
var speedx = 2
var speedy = 2
var x1 = 550
var y1 = 550
var r = 50;

function setup () {
  createCanvas(500, 400);
}
function draw () {
  background(93, 140, 174);
  // ladybug body 
  strokeWeight(4)
  stroke(0);
  fill(225, 0, 0); //red
  // ellipse(x, y, 50, 50);
  ellipse(x, y, r*2, r*2);
  // ladybug line center
  stroke(0);
  strokeWeight(8)
  line(x, y, x, y + 45);
  // point head 
  strokeWeight(45);
  stroke(0);
  point(x + 1, y - 43);
  // Dots Points- center
  stroke(0); //
  strokeWeight(25); //
  point(x, y);
  // // points left
  // points left 1
  strokeWeight(20);
  point(x - 25, y + 20);
  // points left 2
  strokeWeight(20);
  point(x - 25, y - 10);
  // // points right
  // points right 1
  strokeWeight(20);
  point(x + 25, y + 20);
  // points right 2
  strokeWeight(20);
  point(x + 25, y - 10);
  // speed original -redo vector
  // ball bounce P5 video
  // speedx
  if (x > 450) {
    speedx = random(-1, -2)
  }
  if (x < 50) {
    speedx = random(1, 2)
  }
  x = x + speedx
  if (y > 350) {
    speedy = random(-1, -2)
  }
  if (y < 50) {
    speedy = random(1, 2)
  }
  y = y + speedy
}