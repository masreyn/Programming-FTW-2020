const cwidth = 640;
const cheight = 400;
const row = 50;

function setup () {
  createCanvas(cwidth, cheight);
  background(96, 96, 96);
  frameRate(1);
}
function draw () {
  for (let x = 0; x <= width; x += 100) {
    for (let y = 0; y <= height; y += 100) {
      fill(random(255), random(255), random(255));
      ellipse(x, y, 15, 15);
    }
  }
  for (let y = 0; y < height; y += row) {
    for (let x = 0; x < width; x += row) {
      if ( x % 3 === 0) {
        ellipse(x, x + 2, y, y + 2, 20, 20);
        noFill();
        strokeWeight(3);
        stroke(random(255), random(255), random(255));
      } else {
        ellipse(x, y, 5, 5);
        strokeWeight(3);
        noFill();
      }
    }
  }
}