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
  createCanvas(610, 615);
  background(0);
  strokeWeight(4);
  stroke(255, 100, 200);
  noFill();
  frameRate(30);
  t = 0;
}

function draw () {
  translate(width/2, height/2);
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
  t += 1;
  if (frameCount % 500 === 0) {
    background(191, 255, 0);
  }
}
