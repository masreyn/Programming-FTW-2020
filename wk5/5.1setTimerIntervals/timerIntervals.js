// setTimeout(), setInterval(), map(keyToNumber, keyPressed(),
/* setTimeout(-, -); accepts 2 arguments
1. an anonymous fxn
2. time in milliseconds */
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 10;
distance = 2;

function setup () {
  createCanvas(500, 500);
  background(0);
}

function drawBlock (x, y, color) {
  fill(color || 255);
  rect(x, y, 50, 50);
}

function keyTyped () {
  let keyToNumber = Number(key);
  // console.log('pressed', keyCode);
  if (isNaN(keyToNumber)) {
    return;
  }
  keyToNumber = map(keyToNumber, 1, 9, 255, 1) // low for input, high for input & then low for color output & high for output
  // console.log('converted number', keyToNumber);
  blockColor = keyToNumber;
}

//  setTimeOut only occurs once. setInterval runs indefinately.
window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
      drawBlock(blockX, blockY, blockColor);
      blockY += distance; 
    } else {
      blockY = 0;
      blockX += 50;
    }
    if (blockY - 50 > height && blockX - 50 > width) {
    // cancels timer-to memory required to run the timer
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
}, 1500);