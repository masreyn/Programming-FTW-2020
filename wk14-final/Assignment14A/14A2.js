// 14A Final  - Spider Dance to Tarantella Napoletana w. Moon Stars

// // References
/* https://www.google.com/books/edition/_/aynJDwAAQBAJ?hl=en 
   noise(frameCount / number) * number
   translate rotate */
// https://www.khanacademy.org/computer-programming/framecount-processingjs/   5893935759097856 */
// https://learn.mansteri.com/en/p5-tips-and-tricks/processing-tips-tricks-framecount-and-the-modulo-operator/

// // Moon - Moving, speeds
// https://p5js.org/examples/hello-p5-animation.html

// moon - move
var t = 0;
// // sound-amplitude
var level;
var mySound;
var amp2;
var pos; // w float - float int has dec
var frameCount;
var noise;

// spider
var legs;
var angle;
var amplitude;
var period;
var length;
var r;

function preload () {
  mySound = loadSound('sound/tarantella.mp3');
}

function setup () {
  amp2 = new p5.Amplitude();
  background(0);
  // // spider parameters
  legs = 4;
  angle = 0;
  amplitude = 17;
  period = 21;
  length = 60;

  createCanvas(windowWidth, windowHeight);
  r = min(windowWidth, windowHeight);

  // button create - toggle - pause
  textSize(30);
  noStroke();
  button = createButton('START');
  button.mousePressed(setup);
  button.position(82, 1);
  button = createButton('STOP');
  button.mousePressed(togglePlaying);
  button.position(164, 1);

  // sound set
  mySound.setVolume(0.8);
  mySound.play();

  // Leave this below ----
  noFill();
  stroke(248, 248, 255);
  strokeWeight(2.5);
  background(0);

  // color t = 0;
  t = 0;
}

// fxn - Toggle - pause song
function togglePlaying () {
  if (!mySound.isPlaying()) {
    mySound.play();
    mySound.setVolume(0.8);
  } else {
    mySound.pause();
    button.html('STOP');
  }
}

function draw () {
  const vol = amp2.getLevel();
  const diam = map(vol * 1.3, 0, 0.8, 60, 600);

  // stars cluster bkgd
  const starx = random(width);
  const stary = random(height);

  // // ----KEEP BACKGROUND HERE---
  // background(0, 20);
  background(0, 0, 35, 25); // purple-black good

  // noise - color
  var x = width * noise(t);
  var y = height * noise(t + 5);
  var r = 255 * noise(t + 10);
  var g = 255 * noise(t + 15);
  var b = 255 * noise(t + 20);

  // spider - set up call translateRotate() & update
  push(); //  start to spider
  translateRotate();
  for (var i = 0; i < legs; i++) {
    rotate(TWO_PI / legs);
    drawOneLeg();
  }
  updateSpider();
  pop(); // spider - end

  // // moon - start
  push();
  if (t < 500) {
    stroke(255, 255, 77); // yellow
    fill(255, 255, 77);
    ellipse(128 + 0.1 * t, 850 - t * 1.35, diam * 1.2, diam * 1.2);
    t = t + 1;
  } else {
    stroke(255, 255, 77);
    fill(255, 255, 77);
    ellipse(128 + 0.1 * t, 851 - t * 1.3, diam * 1.4, diam * 1.4);
  }
  pop(); // moon - end

  // star start - 7 pt bottm rt
  push();
  translate(width * 0.85, height * 0.65);
  rotate(amplitude * 0.5);
  scale(0.41);
  star(0, 0, 41, 100 + diam, 6);
  pop(); // star  end - 7 pt bottm rt

  // star start - 6 pt top left
  push();
  translate(width * 0.30, height * 0.1);
  rotate(frameCount / 50);
  scale(0.20);
  star(0, 0, 65, 100 + diam, 7);
  // star(0, 0, 20, 70, diam * 0.5); makas a flower
  pop(); // star end - 6 pt top left

  // star start - 8 pt top rt
  push();
  translate(width * 0.8, height * 0.2);
  rotate(frameCount / -90.0 * 2);
  scale(0.5);
  star(0, 0, 110, diam * 0.3, 8);
  pop(); // star end - 8 pt top rt

  // stars start -  cluster bckd
  push();
  noStroke();
  fill(255);
  ellipse(starx, stary, 7, 7);
  pop(); // stars end -  cluster bckd
} // <------------ end draw fxn -------------->

// https://p5js.org/examples/form-star.html
// fxn star - shape start
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  noStroke();
  fill(248, 248, 255);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
// star - shape fxn end

// fxn translateRotate()
function translateRotate() {
  var cx = windowWidth / 2;
  var cy = windowHeight / 2;
  translate(cx, cy); //
  rotate(angle);
}

// fxn drawOneLeg()
function drawOneLeg () {
  // beginShape() original
  beginShape();
  noFill();
  for (var x = 0; x < length; x++) {
    var y = sin(x / period) * amplitude;
    vertex(x * 0.9, y * 0.9);
  }
  endShape(); // original
  // attach ellipse to legs
  fill(248, 248, 255);
  ellipse(245, 95, 15, 15);
}

// fxn -  updateSpider() {
function updateSpider () {
  legs = 4 + noise(frameCount / 500 + 9000) * 20;
  angle += 0.009; // theta - vel
  amplitude = 8 + noise(frameCount / 200) * 30;
  period = 2 + noise(frameCount / 200 + 4000) * 40;
  length = 5 + noise(frameCount / 200 + 1000) * r * 0.7;
}
//  fxn - p5 windowResized()
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
  r = min(windowWidth, windowHeight);
}
