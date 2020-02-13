// fxn mousePressed() clickCount
let rectX = 0;
const rectWidth = 75;
// keep track of how many times the user has clicked
let clickCount = 0;

function setup () {
  createCanvas(500, 500);
}

function draw () {
  background('#25C4D3');
  textSize(24);
  textStyle(BOLD);
  noStroke()
  fill('black');
  text('Try to hit the moving square', 75, 190);
  drawShape();
  rectX++;
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

function mousePressed () {
  if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= 0 &&
    mouseY <= 75)) {
    clickCount++;
    console.log('hit', clickCount);
  }
}
// make a fxn to be somehting we can detects
function drawShape () {
  //fill('purple');
  // rect(0, 0, 75, 75);
  stroke('yellow');
  strokeWeight(4);
  fill('red');
  rect(rectX, 0, rectWidth, 75, 20);
}