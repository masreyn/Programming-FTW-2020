// //13.A Natural Emulation (Atomic) Star-Flower
// noise &  affect on colors - P5 site & videos
// Procedural Shapes - Perceptual color  Rune Madsen
// https://medium.com/@celiawrite/learn-apply-p5-js-b927e254cf11
// https://p5js.org/examples/math-sine-wave.html
// https://p5js.org/reference/#/p5/frameCount
// y = r × sin( θ )  ||  x = r × cos( θ )

let t = 0; // time variable
let xoff2 = 0.2;
let xoff1 = 0.17;
var theta = 0; // Start angle at 0
var amplitude = 500.0;
var period = 150.0;

function setup () {
  createCanvas(775, 755);
  background(0);
  strokeWeight(3);
  stroke(255, 100, 200); // pink main
  noFill();
  frameRate(40);
  t = 0;
}

function draw () {
  // main star-flower
  push();
  translate(400, 420);
  // fade the background by giving it a low opacity
  background(0, 5);
  // started w. a procedural shape - Rune Madsen
  beginShape();
  for (var i = 0; i < 200; i++) {
    var theta = i / 200 * TWO_PI;
    /* Perlin Noise - increment this value at every iteration
    noise(t) will return the same value every time it is called */
    var radians = 200 * noise(i * xoff2, t * 0.008);
    var x = radians * 1.65 * cos(theta);
    var y = radians * 1.65 * sin(theta);
    vertex(x * 1.1, y * 1.1);
  }
  endShape(CLOSE);
  translate()
  pop();
  // left star-flower
  push();
  stroke(0, 206, 209); // cyan
  translate(168, 200);
  rotate(PI / 3.0);
  beginShape();
  for (var i = 0; i < 90; i++) {
    var theta = i / 90 * TWO_PI;
    var radians = 90 * noise(i * xoff2, t * 0.008);
    var x = radians * 1.65 * cos(theta);
    var y = radians * 1.65 * sin(theta);
    vertex(x * 1.1, y * 1.1);
  }
  endShape(CLOSE);
  translate()
  pop();
  // right star-flower
  push();
  stroke(220, 20, 60); // red
  translate(609, 180);
  rotate(PI / 2.6);
  beginShape();
  for (var i = 0; i < 100; i++) {
    var theta = i / 100 * TWO_PI;
    var radians = 100 * noise(i * xoff2, t * 0.008);
    var x = radians * 1.65 * cos(theta);
    var y = radians * 1.65 * sin(theta);
    vertex(x * 1.1, y * 1.1);
  }
  endShape(CLOSE);
  translate()
  pop();
  t += 1.1;
  if (frameCount % 400 === 0) {
    background(191, 255, 0);
   // background(239, 252, 95);
   // background(255, 255, 0)
  }
}
