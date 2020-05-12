// // 14A WF1 - Spider - moon -stars
// star4.js 
// moon - move
var t = 0;
// // sound-amplitude
var level;
var mySound;
var amp2;

//star
var circlex = 0;

// spider
var legs;
var angle;
var amplitude;
var period;
var length;
var r; // made radians r - OK
// perlin noise
let xoff1 = 0.002;
let xoff2 = 0.005;
// let xoff2 = 0.2;
// let xoff1 = 0.17;

function preload() {
  // mySound = loadSound('churchbell.wav');
  mySound = loadSound('sound/tarantella.mp3');
}
function loaded () {
}

function setup() {
  amp2 = new p5.Amplitude();
  background(0);
  // // spider parameters
  // arms = 4;
  leg = 4;
  // angle = 0; orig
  angle = 60;
  amplitude = 20;
  period = 20;
  length = 200;

  createCanvas(windowWidth, windowHeight);
  // button - ON/OFF toggle - do resest
  textSize(30);
  noStroke();
  button = createButton('ON/OFF');
  button.mousePressed(togglePlaying);
  button.size(60, 35);
  button.position(250, 10);

  //sound
  mySound.setVolume(0.9);
  mySound.play();
  // leave this below here ---
  r = min(windowWidth, windowHeight);
  noFill();
  stroke(255);
  stroke(248, 248, 255);
  strokeWeight(2.2);
  background(0);

  // color t = 0;
  t = 0;
  // frameRate(70);
}

/* function mousePressed(){
  reset();
} */

// Toggle song music
function togglePlaying () {
  if (!mySound.isPlaying()) {
    mySound.play();
    mySound.setVolume(0.7);
  } else {
    mySound.pause();
    button.html('ON/OFF');
  }
}

function draw() {
  const vol = amp2.getLevel();
  // const diam = map(vol * 1.6, 0, 0.9, 10, 600);
   const diam = map(vol * 1.5, 0, 0.7, 60, 600);
  // const diam2 = map(level, 0, 0.3, 10, 200);
  //const diam = map(vol * 0.2, 0, 0.7, 60, 600);
  //const diam2 =  map(level, 0, 0.3, 10, 200);

  // stars cluster bkgd
  let starx = random(width);
  let stary = random(height);
  // // ***** KEEP BACKGROUND HERE****
  background(0, 0, 35, 25);// purple-black good

  // color noise
  var x = width * noise(t);
  var y = height * noise(t+5);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);

  // spider
  push(); //  start to spider I added push  ok
  translateRotate();
  for (var i = 0; i < legs; i++) {
    rotate(TWO_PI / legs);
    // rotate(TWO_PI / arms * amplitude * 0.2);
    //rotate(TWO_PI / arms * diam * 0.009); //  spider spins super fast
    // rotate(TWO_PI / arms * 0.5 * diam2); // shuts down spider
    drawOneLeg();
  }
  updateParams();
  // translate();
  pop();

  // // moon - start
  push();
  if (t < 500) {
  //  background(0, 25);
    stroke(255, 255, 77); // yellow
    fill(255,255,77);
    ellipse(150 + 0.2 * t, 795 - t * 1.2, diam * 1.1, diam * 1.1);
    // t = t + 1 * 0.5;
    t = t + 1;
}
  else {
    // background(0, 25);
    //rotate(diam);
    stroke(255, 255, 77);
    fill(255, 255, 77);
    ellipse(150 + 0.2, 800 - t * 1.2, diam * 1.3, diam * 1.3);
  }
  pop(); // moon - end

  // star start - 5pt large
  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  rotate(diam / 2); //
  // rotate(frameCount * diam2);
  star(0, 0, 30, 70, 5);
  pop();

  // 5pt star long points
  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / -100.0);
  //  rotate(diam * 0.02);
  // rotate(vol);
  scale(0.40);
  star(0, 0, 15, 100, 5);
  pop();

  // 8pt star
  push();
  translate(width * 0.8, 100);
  rotate(frameCount / 50.0);
  // rotate(frameCount / 50.0) * diam; spins crazy
  rotate(amplitude * 0.5);
  scale(0.5);
  strokeWeight(2);
  star(0, 0, 110, 25, 8);
  pop();

  // stars - cluster bckd -start
  push();
  noStroke();
  fill(248, 248, 255);
  ellipse(starx, stary, 5, 5);
  pop();
  // stars - cluster bck- end 
} // ------------ end draw fxn --------------

//https://p5js.org/examples/form-star.html
// star - shape function start
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
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
// star - shape function end

function translateRotate() {
   var cx = windowWidth / 2;
   var cy = windowHeight / 2;
    translate(cx, cy); //
  // //var cx = windowWidth / 2;
  // //var cy = windowHeight / 2;
 // //translate(width / 2, height / 2); // I changed  ok
  //translate(width /2, 300);  // I changed  ok
  rotate(angle);
 //  rotate(diam2); doesnt' work
}

function drawOneLeg() {
  // beginShape() original
  beginShape();
  noFill();
  for (var x = 0; x < length; x++) {
  // var y = cos(x / period) * amplitude * 0.6; // ok but lines overlap to make up circle - no round center
  // var y = cos(x / period) * amplitude * 0.002; // straight lines! no round center
  //  var y = cos(x / period) * amplitude * 6;  really cool mesh but not for here
   var y = sin(x / period) * amplitude * 0.6;
   // var y = sin(x / period) * amplitude; // original  more angular
   // const y = sin(theta) * amplitude; NO s
    vertex(x, y);
  }
  endShape(); // original
// ** this ellipse attached to legs
  // noFill(); // I changed  ok 
  fill(254)
  ellipse(250, 100, 20, 20); // I changed  ok
}

function updateParams() {
  //arms = 4 + noise(frameCount / 500 + 9000) * 20;
  legs = 4 + noise(frameCount / 250 + 10000) * 10;
  // angle += 0.0081; // original
  //angle += 0.002;
  // angle += 0.0021 // speed theta
  angle += 0.009 // speed theta
  // angle += 0.0061; // seems smoother sat nite
  amplitude = 10 + noise(frameCount / 200) * 30;
 // period = 2 + noise(frameCount / 200 + 4000) * 40; orig
  period = 6 + noise(frameCount/200 + 4000) * 40;
  // length = 10  + noise(frameCount / 200 + 1000) * r * 0.7; orig
  length = 15 + noise(frameCount / 100 + 1000) * r;
}

// original
function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); // original
  r = min(windowWidth, windowHeight); // I changed  r to radians ok
} 
/*
function windowResized() { // I changed  ok
    resizeCanvas(1000, 1000); // I changed  ok
    r = min(1000, 1000); // I changed  ok
  }*/