// 1d array cat eyes - RotateX
const cols = 15;
const rows = 30;

function setup () {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.position(0, 0, 'fixed');
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {}
  }
}
function draw () {
  background(0);
  translate(0, 0);
  rotateX(millis() / 1200);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * 94;
      let y = j * 40;
      ellipseMode(RADIUS);
      fill(153, 204, 0); // green
      ellipse(x, y, 43, 14);
      ellipseMode(CENTER);
      fill(0); // black
      ellipse(x, y, 4, 26);
    }
  }
}