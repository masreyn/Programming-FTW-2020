var y = 75;
var x = 75;
var speedx = 1.5;
var speedy = 1.5;

function setup () {
  createCanvas(500, 400);
}
function draw () {
  background(93, 140, 174);
  // Cell main
  strokeWeight(4)
  stroke(0);
  fill('green');
  ellipse(x, y, 50, 50);
  // cell nucleus- center
  stroke(0);
  strokeWeight(17);
  point(x, y);
  // cell receptor top
  stroke('lightblue');
  strokeWeight(12);
  point(x + 1, y - 30);
  // targeted drug top
  stroke('red');
  strokeWeight(35);
  point(x, x - 42, y);
  // cell receptor left 1
  stroke('lightblue');
  strokeWeight(12);
  point(x - 25, y + 20);
  // cell receptor left 2
  strokeWeight(12);
  point(x - 25, y - 10);
  // cell receptor right 1
  strokeWeight(12);
  point(x + 25, y + 20);
  // cell receptor right 2
  strokeWeight(12);
  point(x + 25, y - 10);
  // // ball bounce - speed- P5 video - try vector again
  // // speedx
  if (x > 475) {
    speedx = random(-1, -2)
  }
  if (x < 25) {
    speedx = random(1, 2)
  }
  x = x + speedx
  // speedy
  if (y > 375) {
    speedy = random(-1, -2)
  }
  if (y < 25) {
    speedy = random(1, 2)
  }
  y = y + speedy
}