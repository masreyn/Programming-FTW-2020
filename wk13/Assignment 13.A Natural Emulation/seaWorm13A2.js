// //13.A Natural Emulation Deep Sea-Worm Creature-2
// noise &  affect on colors - P5 site & videos
// Perlin Noise https://p5js.org/reference/#/p5/noise
// Procedural Shapes - Perceptual color  Rune Madsen
// https://medium.com/@celiawrite/learn-apply-p5-js-b927e254cf11
// https://p5js.org/examples/math-sine-wave.html
// y = r × sin( θ )   theta θ = position angle

let t = 0; // time variable
let xoff1 = 0.002;
let xoff2 = 0.005;
let startTheta = 0;
const thetaVel = 0.4;
let amplitude = 85.0;

function setup () {
  createCanvas(800, 600);
  background(0);
  t = 0;
}

function draw () {
  // fade the background by giving it a low opacity
  background(0, 12);
  translate(100, 250);
  /* Perlin Noise - increment this value at every iteration
     noise(t) will return the same value every time it is called */
  let theta = startTheta;
  startTheta += 0.015;
  var x = width * noise(t);
  var y = height * noise(t + 5);
  var r = 255 * noise(t + 15);
  var g = 255 * noise(t + 15);
  var b = 255 * noise(t + 10);

  // sine wave loop  -> y = r × sin( θ )
  for (let x = 0; x <= 600; x += 28) {
    let y = sin(theta) * amplitude;
    noStroke();
    fill(0, g, b);
    ellipse(x, y, 50, 50);
    fill(179, 244, 253);
    ellipse(x, y - 36, 15, 15);
    noStroke();
    fill(r, 0, b);
    ellipse(x - 1, y - 30, 20, 20);
    theta += thetaVel;
    t = t + 0.0001;
  }
}