// Assignment 11A -Themes of Computational Aesthetics
// Sketch 11Ac- Repeat - Translate - shear to move
// array cat eyes 
const rows = 35;

function setup () {
  createCanvas(1000, 1000);
  translate(0, 0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {}
  }
}
function draw () {
  background(0);
  translate(50, 50);
  clear();
  // the 'shear' function skews
  shearX(PI / mouseY * 6);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * 95;
      let y = j * 70;
      ellipseMode(RADIUS);
      fill(153, 204, 0); // green
      ellipse(x, y, 43, 14);
      ellipseMode(CENTER);
      fill(0); // black
      ellipse(x, y, 4, 26);
    }
  }
}