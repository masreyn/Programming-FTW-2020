const rectWidth = 150;
const rectHeight = 175;
let startX = 125;
let startY = 125;
const cardArry = [];
const NUM_COLS = 4;
const NUM_ROWS = 4;
let startId = 0;
let clickCount = 0;
let match;
let reset;

function setup () {
  createCanvas(1000, 1100);
  background('#57a9aa');
  for (let k = 0; k < NUM_ROWS; k++) {
    for (let i = 0; i < NUM_COLS; i++) {
      fill('white')
      noStroke();
      rect(startX, startY, rectWidth, rectHeight);
      cardArry.push({ x: startX, y: startY, id: startId }); // object literals--push in & keep track of these
      startX += 200;
      startId++
    }
    startY += 225;
    startX = 125; // need to set back to original startX
  }
  console.log(cardArry);
}

function mousePressed () {
// for (let j = 0; j < cardArry.length; j++) {
  if ((mouseX >= startX && mouseX <= startX + rectWidth) && (mouseY >= startY && mouseY <= startY + rectHeight)) {
    // console.log('mouse pressed', mouseX, mouseY);
    clickCount++;
    // console.log('rect hit');
  }
}

function draw () {
//  Title
  textFont('Roboto', 'sans-serif');
  textSize(25);
  noStroke();
  fill(255);
  text('ANIMAL MATCH GAME', 335, 100);

  // Score
  textSize(25);
  noStroke();
  fill(255);
  text('MATCHES :', 140, 1035);
  text('PLAY AGAIN', 730, 1035);

  // Score box
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(125, 1000, 325, 50);
}

// Score
textSize(25);
noStroke();
fill(255);
text('PLAY AGAIN', 730, 1035);