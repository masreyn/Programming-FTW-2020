// Excerise 13.1 Oscillation
// // Recall
// sin(θ = Opposite / Hypotenuse
// sin(θ) = thetaθ is the angle of ▵
// sin(frequency) * amplitude
// f(t) = sin(t)

var slider;
var pos; // w float - float int has dec

function setup () {
  createCanvas(800, 700);
  angleMode(DEGREES);

  slider = createSlider(0, 15, 0);
  slider.position(690, 600);
  slider2 = createSlider(0, 15, 0);
  slider2.position(690, 635);

  pos = 0.0;
  inc = 3.0;
  pos2 = 0.0;
  inc2 = 9.0;
}
// sin fnx when too big- flips back -how sin fxns work
function draw () {
  clear(); // clear -this to not redraw all the circles

  translate(width/2, height/2);
  var mySinVal = sin(pos); // sine function call
  var mySinVal2 = sin(pos2);
  amplified = mySinVal * 100;
  amplified2 = mySinVal2 * 150;
  beginShape();
  for (x = 0; x <= 360; x = x + 5) { // this double the number of lines
    stroke('Crimson');
    strokeWeight(20);
    point(amplified, 300);
    stroke('seagreen');
    point(amplified2, 230);
    strokeWeight(15)
    stroke('Orchid');
    point(amplified, 85);
    strokeWeight(15)
    stroke('CornflowerBlue');
    point(amplified2, 115);
    stroke('Coral');
    point(amplified2, 210);
    stroke('LightSeaGreen');
    point(amplified, 250);
    strokeWeight(20);
    stroke('gold');
    point(amplified, 150);
    strokeWeight(30);
    stroke('DarkMagenta');
    point(amplified2, 328);
    strokeWeight(8);
    stroke('yellow');
    // rotate x
    rotate(x);
  }
  endShape();
   pos = pos + slider.value();
   pos2 = pos2 + slider2.value();
}
