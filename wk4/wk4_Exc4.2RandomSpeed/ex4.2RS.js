// fxn mousePressed() clickCount
let rectX = 0;
// //define rectHeight
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;

// Randomly assign Y & speed
function setup () {
  createCanvas(500, 500);
  rectY = random(height - rectHeight);
  speed = random(1, 3);
}

function draw () {
  background('#25C4D3');
  textSize(24);
  textStyle(BOLD);
  noStroke()
  fill('black');
  text('Try to hit the moving square', 75, 190);
  drawShape();
  //rectX ++;
  rectX += speed;
  // stop the loop once the rect has left the canvas
  // interpolate in the click count
  // console.log(rectX, width);
  if (rectX > width) {
    noLoop();
    textSize(42);
    textStyle(BOLD);
    stroke('yellow');
    strokeWeight(4);
    fill('red');
    text('Your score was ' + clickCount, 65, 275);
  }
}

function mousePressed() {
  if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectHeight &&
    mouseY <= rectY + rectHeight)) {
    clickCount++;
    // console.log('hit', clickCount);
  }
}

// make a fxn to be somehting we can detects
function drawShape () {
  fill('red');
  rect(rectX, rectY, rectWidth, rectHeight, 15);
}